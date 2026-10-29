// Walking in the 3D maze (src/walk.js, from the look test's lab/shoulder/walk.js): step and turn on the grid,
// free walking, gates, the hole and the fall, and rooms placed so an opening shows the next room (and the one after,
// two deep) exactly where you'll arrive. The look test's own tests stay in test/shoulder-walk.test.mjs.
import test from 'node:test';
import assert from 'node:assert/strict';
import { MAP } from '../src/map.js';
import { gatesOf, heightsOf, dropsOf, step, placement, apply, applyDir, invert, rot, nameOf, LEFT_OF, RIGHT_OF, compose, portalsOf, portalTree, FALL, IDENTITY } from '../src/walk.js';
import { splitTo, wayOf } from '../src/graph.js';

const M = MAP;
const ALL = Object.keys(M.rooms);
const gate = (room, id) => gatesOf(M.rooms[room]).find((g) => g.way.id === id);
const close = (a, b) => a.every((v, i) => Math.abs(v - b[i]) < 1e-9);

test('turning: four lefts or four rights bring you back', () => {
  let f = 'se';
  for (let i = 0; i < 4; i++) f = LEFT_OF[f];
  assert.equal(f, 'se');
  assert.equal(RIGHT_OF[LEFT_OF.ne], 'ne');
});

test('walking: floor yes, landmark no, steps one half-block at a time', () => {
  const room = M.rooms.courtyard;
  const h = heightsOf(room);
  assert.equal(step(room, [2, 4], 'ne', 1, h).kind, 'move');
  assert.equal(step(room, [2, 3], 'ne', 1, h).kind, 'blocked', 'the orb pillar is at [2, 2]');
  assert.equal(step(room, [3, 2], 'se', 1, h).kind, 'blocked', 'the flight\'s side is a block high there');
  // Up the flight (x 4): from the floor at [4, 4] to the top step at [4, 0].
  let cell = [4, 4];
  const heights = [];
  for (let i = 0; i < 4; i++) { const r = step(room, cell, 'ne', 1, h); assert.equal(r.kind, 'move'); cell = r.to; heights.push(r.h); }
  assert.deepEqual(heights, [0.5, 1, 1.5, 2]);
  const r = step(room, cell, 'ne', 1, h);
  assert.equal(r.kind, 'gate');
  assert.equal(r.gate.way.id, 'climb');
  assert.equal(step(room, [0, 0], 'nw', 1, h).kind, 'blocked', 'the wall');
});

test('every gate in all twelve rooms leads to a gate that leads back', () => {
  for (const id of ALL) {
    for (const g of gatesOf(M.rooms[id])) {
      if (!g.way.to) continue;
      const [r, w] = splitTo(g.way.to);
      const back = gatesOf(M.rooms[r]).find((x) => x.way.id === w);
      assert.ok(back, `${id}.${g.way.id}`);
      assert.equal(back.way.to, `${id}.${g.way.id}`);
    }
  }
});

test('the door: the Gallery sits right behind the Courtyard\'s wall, its walkway on the door', () => {
  const gA = gate('courtyard', 'gallery'), gB = gate('gallery', 'court');
  const p = placement(gA, gB);
  assert.ok(close(apply(p, [gB.L[0] + 0.5, gB.L[1] + 0.5, gB.hL]), [gA.O[0] + 0.5, gA.O[1] + 0.5, gA.hO]), 'arrive where you step');
  assert.ok(close(apply(p, [gB.O[0] + 0.5, gB.O[1] + 0.5, gB.hO]), [gA.L[0] + 0.5, gA.L[1] + 0.5, gA.hL]), 'and the reverse');
  assert.equal(nameOf(applyDir(p, gB.dir)), 'sw', 'the Gallery\'s way out faces back through the door');
});

test('the stairs: Landing I sits two and a half blocks up, the climb carries on into its stairs', () => {
  const gA = gate('courtyard', 'climb'), gB = gate('landing1', 'down');
  const p = placement(gA, gB);
  assert.equal(p.dy, 2.5);
  assert.ok(close(apply(p, [gB.L[0] + 0.5, gB.L[1] + 0.5, gB.hL]), [gA.O[0] + 0.5, gA.O[1] + 0.5, 2.5]));
  // Its first step down lands on the Courtyard's top step: the stairs join with no jump.
  assert.ok(close(apply(p, [gB.O[0] + 0.5, gB.O[1] + 0.5, gB.hO]), [gA.L[0] + 0.5, gA.L[1] + 0.5, 2]));
});

test('placing back the other way is the inverse, so walking through and back returns to the same spot', () => {
  const pairs = [['courtyard', 'gallery', 'gallery', 'court'], ['courtyard', 'climb', 'landing1', 'down']];
  for (const [a, ga, b, gb] of pairs) {
    const p = placement(gate(a, ga), gate(b, gb));
    const q = placement(gate(b, gb), gate(a, ga));
    const inv = invert(p);
    assert.deepEqual([q.k, q.dy], [inv.k, inv.dy]);
    assert.ok(close([q.tx, q.ty], [inv.tx, inv.ty]));
    const pt = [1.25, 2.75, 0.5];
    assert.ok(close(apply(q, apply(p, pt)), pt));
  }
  assert.deepEqual(rot([1, 0], 1), [0, 1]);
});

// ---- free walking ----
import { freeMove, facingOfYaw, RADIUS, DOOR_SPAN } from '../src/walk.js';

function walkFree(room, pos, dir, steps, passable = () => true) {
  const heights = heightsOf(M.rooms[room]), gates = gatesOf(M.rooms[room]), drops = dropsOf(M.rooms[room]);
  let p = [...pos], last = null;
  for (let i = 0; i < steps; i++) {
    const r = freeMove(p, [dir[0] * 0.05, dir[1] * 0.05], { heights, gates, drops, passable });
    p = r.pos; last = r;
    if (r.crossed || r.fell) break;
  }
  return { pos: p, last };
}

test('free walking: a wall stops you at your own half-width, and you slide along it', () => {
  const r = walkFree('courtyard', [0.5, 5.5], [-0.7, -0.7], 30);       // into the nw wall at an angle (below its door)
  assert.ok(Math.abs(r.pos[0] - RADIUS) < 0.06, `stopped at the wall: x ${r.pos[0]}`);
  assert.ok(r.pos[1] < 5.0, 'and slid along it');
  assert.equal(r.last.crossed, null);
});

test('free walking: up the Courtyard\'s flight step by step, not up its side; through the gap at the top', () => {
  const side = walkFree('courtyard', [3.5, 2.5], [1, 0], 40);
  assert.ok(side.pos[0] < 4 - RADIUS + 0.06, 'the flight\'s side (a block high there) stops you');
  const up = walkFree('courtyard', [4.5, 4.5], [0, -1], 200);
  assert.ok(up.last.crossed, 'walking straight up the flight takes you through at the top');
  assert.equal(up.last.crossed.way.id, 'climb');
});

test('free walking: the door to the Gallery lets you through; a way out of the test bumps you back', () => {
  const door = walkFree('courtyard', [1.5, 1.5], [0, -1], 60);
  assert.equal(door.last.crossed && door.last.crossed.way.id, 'gallery');
  const shut = walkFree('courtyard', [0.5, 3.5], [-1, 0], 60, (g) => g.way.id !== 'well');
  assert.equal(shut.last.crossed, null);
  assert.equal(shut.last.bumped && shut.last.bumped.way.id, 'well');
});

test('free walking: the nearest of the four directions', () => {
  assert.equal(facingOfYaw(0.3), 'ne');
  assert.equal(facingOfYaw(Math.PI / 2 + 0.2), 'se');
  assert.equal(facingOfYaw(-Math.PI), 'sw');
  assert.equal(facingOfYaw(-Math.PI / 2 - 0.4), 'nw');
  assert.equal(facingOfYaw(2 * Math.PI), 'ne');
});

test('the Gallery is entered from its short end, looking down its length', () => {
  const gB = gate('gallery', 'court');
  assert.equal(gB.side, 'se');
  const p = placement(gate('courtyard', 'gallery'), gB);
  assert.equal(nameOf(applyDir(p, [-1, 0])), 'ne', 'walking down the Gallery (towards its x = 0 end) is straight on from the door');
});

test('free walking: thousands of random moves in all twelve rooms never wedge the figure, and it can always move', () => {
  let seed = 12345;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  for (const id of ALL) {
    const room = M.rooms[id];
    const heights = heightsOf(room), gates = gatesOf(room);
    const opts = { heights, gates, passable: () => false };          // stay in the room: every way out is shut (and the hole too)
    const cells = [...heights.keys()].map((k) => k.split(',').map(Number));
    for (let run = 0; run < 40; run++) {
      const c = cells[Math.floor(rnd() * cells.length)];
      let p = [c[0] + 0.5, c[1] + 0.5];
      for (let i = 0; i < 400; i++) {
        const a = rnd() * Math.PI * 2, d = 0.02 + rnd() * 0.06;
        const r = freeMove(p, [Math.cos(a) * d, Math.sin(a) * d], opts);
        assert.equal(r.wedged, false, `${id}: wedged at ${r.pos.map((v) => v.toFixed(3))}`);
        p = r.pos;
        if (i % 50 === 0) {
          const moved = [0, 1, 2, 3, 4, 5, 6, 7].some((k) => {
            const q = freeMove(p, [Math.cos(k * Math.PI / 4) * 0.05, Math.sin(k * Math.PI / 4) * 0.05], opts).pos;
            return q[0] !== p[0] || q[1] !== p[1];
          });
          assert.ok(moved, `${id}: can't move at all from ${p.map((v) => v.toFixed(3))}`);
        }
      }
    }
  }
});

test('free walking: the stuck spot by a flight (Landing I) can\'t be reached, and walking along it slides', () => {
  const room = M.rooms.landing1, heights = heightsOf(room), gates = gatesOf(room);
  // Slide down the side of Landing I's flight (x 5, steps 2 / 1.5 / 1 / 0.5 from y 0 to 3) with the floor on the left.
  let p = [4.6, 0.6];
  for (let i = 0; i < 120; i++) {
    const r = freeMove(p, [0.03, 0.04], { heights, gates, passable: () => false });
    assert.equal(r.wedged, false, `wedged at ${r.pos.map((v) => v.toFixed(3))}`);
    p = r.pos;
  }
  assert.ok(p[1] > 3, `slid along to the foot of the flight: ${p.map((v) => v.toFixed(2))}`);
});

test('free walking: up the flight at a slight angle (over its lower edge), but not off its side', () => {
  const room = M.rooms.courtyard, heights = heightsOf(room), gates = gatesOf(room);
  let p = [4.5, 4.5], crossed = null;
  for (let i = 0; i < 200 && !crossed; i++) {
    const r = freeMove(p, [0.012, -0.05], { heights, gates });     // drifting right as it climbs
    p = r.pos; crossed = r.crossed;
  }
  assert.ok(crossed, `reached the top: ${p.map((v) => v.toFixed(2))}`);
  // From the top step (2 high) you can't step sideways onto the floor beside it.
  const off = freeMove([4.7, 0.5], [0.3, 0], { heights, gates });
  assert.ok(off.pos[0] < 5, 'no stepping off the side of the flight');
});

test('free walking: up the flight off-centre never gets stuck, and you can always step back', () => {
  const room = M.rooms.courtyard, heights = heightsOf(room), gates = gatesOf(room);
  let p = [4.27, 4.6], support = 0, worst = 0;
  for (let i = 0; i < 160; i++) {
    const r = freeMove(p, [0, -0.04], { heights, gates });
    if (r.crossed) break;
    assert.ok(r.pos[1] < p[1] - 1e-9, `kept climbing at step ${i} (y ${p[1].toFixed(2)})`);
    worst = Math.max(worst, Math.abs(r.support - support)); support = r.support; p = r.pos;
  }
  assert.ok(worst <= 0.5, 'never more than half a block at a time');
  // Halfway up, walk to the flight's edge: stopped at the edge (not off it), and you can walk back.
  let q = [4.5, 1.5];
  for (let i = 0; i < 40; i++) q = freeMove(q, [-0.04, 0], { heights, gates }).pos;
  assert.ok(q[0] > 4 - RADIUS && q[0] < 4 + RADIUS, `stopped at the edge: x ${q[0].toFixed(2)}`);
  const back = freeMove(q, [0.04, 0], { heights, gates });
  assert.ok(back.pos[0] > q[0], 'and walking back works');
});

test('free walking: touching a step lifts you onto it (you stand on the highest thing under you)', () => {
  const room = M.rooms.courtyard, heights = heightsOf(room), gates = gatesOf(room);
  // From the floor below the flight (x 4, y 4) walk towards the first step (y 3, half a block up).
  let p = [4.5, 4.5], r;
  for (let i = 0; i < 6; i++) { r = freeMove(p, [0, -0.05], { heights, gates }); p = r.pos; }
  assert.ok(p[1] - RADIUS < 4, 'the footprint is over the step');
  assert.equal(r.support, 0.5);
});

// ---- the real maze: every opening, two deep, the hole ----

test('every opening in every room is placed so you arrive where you step, and back again', () => {
  for (const id of ALL) {
    for (const p of portalsOf(M, id)) {
      if (p.gate.drop) continue;
      const gB = gatesOf(M.rooms[p.toRoom]).find((x) => x.way.id === p.toWay);
      const gA = p.gate;
      assert.ok(close(apply(p.P, [gB.L[0] + 0.5, gB.L[1] + 0.5, gB.hL]), [gA.O[0] + 0.5, gA.O[1] + 0.5, gA.hO]), `${id}.${gA.way.id}`);
      assert.ok(close(apply(p.P, [gB.O[0] + 0.5, gB.O[1] + 0.5, gB.hO]), [gA.L[0] + 0.5, gA.L[1] + 0.5, gA.hL]), `${id}.${gA.way.id} back`);
      const q = portalsOf(M, p.toRoom).find((x) => x.gate.way.id === p.toWay);
      const pt = [0.3, 1.7, 0.25];
      assert.ok(close(apply(q.P, apply(p.P, pt)), pt), `${id}.${gA.way.id} and back is no move at all`);
    }
  }
});

test('the closed door shows nothing; every other way on shows its room', () => {
  const lantern = portalsOf(M, 'lantern').map((p) => p.gate.way.id).sort();
  assert.deepEqual(lantern, ['hall', 'lookout']);
  for (const id of ALL) {
    const n = M.rooms[id].ways.filter((w) => w.to && !w.closed).length;
    assert.equal(portalsOf(M, id).length, n, id);
  }
});

test('two deep (M13): each opening\'s room shows its own openings, but never the way back', () => {
  for (const id of ALL) {
    for (const p of portalTree(M, id, 2)) {
      for (const q of p.inner) {
        assert.equal(q.from, p.toRoom);
        assert.notEqual(q.gate.way.id, p.back, `${id} > ${p.toRoom}: the way back isn't shown`);
        assert.deepEqual(q.inner, [], 'nothing three deep');
      }
    }
  }
  // Landing I shows Landing II up its flight, and Landing III beyond.
  const up = portalTree(M, 'landing1', 2).find((p) => p.gate.way.id === 'climb');
  assert.equal(up.toRoom, 'landing2');
  assert.deepEqual(up.inner.map((q) => q.toRoom), ['landing3']);
  assert.equal(up.inner[0].Pw.dy, 5, 'two flights up');
});

test('the Penrose loop: four flights up, all placed end to end, bring Landing I back 10 blocks above itself, unturned', () => {
  let P = IDENTITY, room = 'landing1';
  for (let i = 0; i < 4; i++) {
    const p = portalsOf(M, room).find((x) => x.gate.way.id === 'climb');
    P = compose(P, p.P); room = p.toRoom;
  }
  assert.equal(room, 'landing1');
  assert.equal(P.dy, 10);
  assert.equal(P.k, 0);
  // So the same room is drawn more than once: two deep from Landing II's foot, Landing I shows up again.
  const tree = portalTree(M, 'landing2', 2);
  assert.ok(tree.some((p) => p.inner.some((q) => q.toRoom === 'landing4')));
});

test('the hole (M12): the Cellar hangs FALL blocks below, its landing spot right under the hole', () => {
  const p = portalsOf(M, 'well').find((x) => x.gate.drop);
  assert.equal(p.toRoom, 'cellar');
  const landing = wayOf(M.rooms.cellar, 'landing');
  const [hx, hy] = wayOf(M.rooms.well, 'hole').at;
  assert.ok(close(apply(p.P, [landing.at[0] + 0.5, landing.at[1] + 0.5, 0]), [hx + 0.5, hy + 0.5, -FALL]));
  assert.equal(p.back, null, 'no way back up');
  assert.ok(!portalsOf(M, 'cellar').some((x) => x.toRoom === 'well'), 'the Cellar shows no way back up');
});

test('the hole: walking round its edge is fine; stepping in is a fall', () => {
  // Along the row above the hole (2, 2), the footprint over its edge: no fall.
  const edge = walkFree('well', [0.5, 1.7], [1, 0], 70);
  assert.equal(edge.last.fell, null);
  assert.ok(edge.pos[0] > 3.5, 'walked right past it');
  // Straight at it: you fall.
  const into = walkFree('well', [2.5, 0.5], [0, 1], 60);
  assert.ok(into.last.fell, 'fell');
  assert.equal(into.last.fell.way.id, 'hole');
  // Step and turn: a step into the hole is a fall too.
  const room = M.rooms.well;
  assert.equal(step(room, [2, 1], 'sw', 1).kind, 'fall');
  assert.equal(step(room, [2, 3], 'ne', 1).kind, 'fall');
});

test('free walking: through every way on in every room, from its standing cell', () => {
  for (const id of ALL) {
    for (const g of gatesOf(M.rooms[id])) {
      const r = walkFree(id, [g.L[0] + 0.5, g.L[1] + 0.5], g.dir, 60, (x) => !!x.way.to);
      if (g.way.to) assert.equal(r.last.crossed && r.last.crossed.way.id, g.way.id, `${id}.${g.way.id}`);
      else assert.equal(r.last.crossed, null, `${id}.${g.way.id} stays shut`);
    }
  }
});

test('M38: walking at any door, from anywhere and at any angle, the body never goes into the wall beside its arch, and still gets through', () => {
  const R = 0.2;                                                     // the figure's body (world.js buildFigure)
  let worst = 0, through = 0, tries = 0;
  for (const id of Object.keys(MAP.rooms)) {
    const room = MAP.rooms[id], gates = gatesOf(room), heights = heightsOf(room), drops = dropsOf(room);
    const passable = (q) => !!q.way.to && !q.way.closed;
    for (const g of gates.filter((q) => q.way.kind === 'door' && passable(q))) {
      const lat = g.dir[0] === 0 ? 0 : 1;
      for (let off = -0.45; off <= 0.45001; off += 0.15) for (let ang = -1.2; ang <= 1.2001; ang += 0.3) {
        let p = [g.L[0] + 0.5, g.L[1] + 0.5]; p[lat] += off;
        const f = [g.dir[0] * Math.cos(ang) + (lat === 0 ? Math.sin(ang) : 0), g.dir[1] * Math.cos(ang) + (lat === 1 ? Math.sin(ang) : 0)];
        let crossed = false;
        for (let i = 0; i < 80 && !crossed; i++) {
          const r = freeMove(p, [f[0] * 0.04, f[1] * 0.04], { heights, gates, drops, passable });
          p = r.pos; crossed = !!r.crossed;
          const along = (p[1 - lat] - (g.L[1 - lat] + 0.5)) * g.dir[1 - lat];
          if (!crossed && along + R > 0.5) { const u = p[lat] - g.O[lat]; worst = Math.max(worst, DOOR_SPAN[0] - (u - R), (u + R) - DOOR_SPAN[1]); }
        }
        if (Math.abs(off) <= 0.3 && Math.abs(ang) <= 0.6) { tries++; if (crossed) through++; }
      }
    }
  }
  assert.ok(worst <= 1e-9, `the body went ${worst.toFixed(2)} into a door jamb`);
  assert.equal(through, tries, 'walking at a door roughly on line gets you through');
});
