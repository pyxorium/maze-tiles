// The maze's map (tile/map.js) and its rules (tile/graph.js): links are honest, nothing traps you, the three
// impossible pieces are really there, and "back" follows the trail (cleared by a drop).
import test from 'node:test';
import assert from 'node:assert/strict';
import { MAP } from '../tile/map.js';
import { checkMap, createNav, geometry, findPath, splitTo, wayOf, linkKey, MAX_TRAIL } from '../tile/graph.js';

const clone = (o) => structuredClone(o);

test('the map has no problems', () => {
  assert.deepEqual(checkMap(MAP), []);
});

test('twelve rooms, four per area, each with one to three ways on', () => {
  const rooms = Object.values(MAP.rooms);
  assert.equal(rooms.length, 12);
  for (const area of Object.keys(MAP.areas)) assert.equal(rooms.filter((r) => r.area === area).length, 4, area);
  for (const r of rooms) {
    const n = r.ways.filter((w) => w.kind !== 'landing').length;
    assert.ok(n >= 1 && n <= 3, r.name);
    assert.ok(r.size[0] <= 8 && r.size[1] <= 8, r.name);
  }
});

test('the Penrose loop: four flights, all up, back where you began', () => {
  const nav = createNav(MAP);
  nav.state.room = 'landing1';
  const seen = [];
  for (let i = 0; i < 4; i++) {
    const t = nav.target('climb');
    assert.equal(t.way.kind, 'stairs');
    assert.equal(t.way.dir, 'up', `flight ${i + 1} goes up`);
    nav.commit(t);
    seen.push(nav.state.room);
  }
  assert.deepEqual(seen, ['landing2', 'landing3', 'landing4', 'landing1']);
  // And down runs it the other way round.
  const down = [];
  for (let i = 0; i < 4; i++) { const t = nav.target('foot'); assert.equal(t.way.dir, 'down'); nav.commit(t); down.push(nav.state.room); }
  assert.deepEqual(down, ['landing4', 'landing3', 'landing2', 'landing1']);
});

test('the drop is one way: no way back up, back is cleared, and the start is still reachable', () => {
  const hole = wayOf(MAP.rooms.well, 'hole');
  assert.equal(hole.kind, 'drop');
  const [r, w] = splitTo(hole.to);
  const landing = wayOf(MAP.rooms[r], w);
  assert.equal(landing.kind, 'landing');
  assert.equal(landing.to, undefined);
  for (const room of Object.values(MAP.rooms)) for (const x of room.ways) assert.notEqual(x.to, 'well.hole', 'nothing leads up the hole');

  const nav = createNav(MAP);
  nav.commit(nav.target('well'));
  assert.ok(nav.backTarget(), 'back works before the drop');
  nav.commit(nav.target('hole'));
  assert.equal(nav.state.room, 'cellar');
  assert.equal(nav.state.fell, true);
  assert.equal(nav.backTarget(), null, 'no way back up');
  // Walk home: cellar → hall → closet → gallery → courtyard.
  for (const id of ['up', 'closet', 'gallery', 'court']) nav.commit(nav.target(id));
  assert.equal(nav.state.room, 'courtyard');
});

test('bigger on the inside: the 2x2 Closet opens into the 8x8 Great Hall, through a door in its tall wall', () => {
  const closet = MAP.rooms.closet, hall = MAP.rooms.hall;
  assert.deepEqual(closet.size, [2, 2]);
  assert.deepEqual(hall.size, [8, 8]);
  const [r, w] = splitTo(wayOf(closet, 'hall').to);
  assert.equal(r, 'hall');
  assert.equal(wayOf(hall, w).kind, 'door');
  assert.ok(hall.wallHeight > 3);
});

test('the Lookout\'s stairs go down into the loop', () => {
  const w = wayOf(MAP.rooms.lookout, 'down');
  assert.equal(w.dir, 'down');
  assert.equal(splitTo(w.to)[0], 'landing3');
});

test('the Lantern room\'s door is closed in step 1', () => {
  const door = wayOf(MAP.rooms.lantern, 'door');
  assert.equal(door.closed, true);
  assert.equal(createNav(MAP).target('door'), null);
});

test('back walks the trail, at most 8 rooms', () => {
  const nav = createNav(MAP);
  nav.commit(nav.target('climb'));                 // courtyard → landing1
  assert.equal(nav.backTarget().toRoom, 'courtyard');
  for (let i = 0; i < 9; i++) nav.commit(nav.target('climb'));   // round and round the loop
  assert.equal(nav.state.trail.length, MAX_TRAIL);
  let steps = 0;
  while (nav.backTarget()) { nav.commit(nav.backTarget(), { back: true }); steps++; }
  assert.equal(steps, MAX_TRAIL);
  assert.equal(nav.state.room, 'landing2', 'eight back from landing2 (ten climbs from the courtyard)');
});

test('the map card\'s links: two-way links read the same from either end', () => {
  const a = wayOf(MAP.rooms.courtyard, 'climb');
  const b = wayOf(MAP.rooms.landing1, 'down');
  assert.equal(linkKey('courtyard', a), linkKey('landing1', b));
  assert.match(linkKey('well', wayOf(MAP.rooms.well, 'hole')), />/);
});

test('every way on fits its room, and up-flights climb two blocks to the wall', () => {
  for (const [id, room] of Object.entries(MAP.rooms)) {
    for (const w of room.ways) {
      const g = geometry(room, w);
      assert.ok(g.path.length >= 2, `${id}.${w.id}`);
      if ((w.kind === 'stairs' || w.kind === 'ramp') && w.dir === 'up') assert.equal(g.path.at(-1)[2], 2);
      if ((w.kind === 'stairs' || w.kind === 'ramp') && w.dir === 'down') assert.ok(g.path.at(-1)[2] < 0);
    }
  }
  assert.deepEqual(findPath(MAP.rooms.courtyard, [2, 4], [1, 0]).at(-1), [1, 0]);
});

// The checker itself catches broken maps.
test('checkMap catches a link that doesn\'t point back', () => {
  const m = clone(MAP);
  wayOf(m.rooms.gallery, 'court').to = 'courtyard.climb';
  assert.ok(checkMap(m).some((p) => /doesn't lead back|can't arrive/.test(p)));
});

test('checkMap catches a missing room and a way that leads nowhere', () => {
  const m = clone(MAP);
  wayOf(m.rooms.lookout, 'lantern').to = 'nowhere.door';
  const p = checkMap(m);
  assert.ok(p.some((x) => /doesn't exist/.test(x)));
});

test('checkMap catches a trap: a drop into a room with no way out', () => {
  const m = clone(MAP);
  m.rooms.pit = { name: 'Pit', area: 'sand', size: [3, 3], mapAt: [0, 4], marks: [], ways: [{ id: 'landing', kind: 'landing', at: [1, 1] }, { id: 'nothing', kind: 'door', side: 'ne', at: 1, closed: true }] };
  wayOf(m.rooms.well, 'hole').to = 'pit.landing';
  const p = checkMap(m);
  assert.ok(p.some((x) => /pit: there's no way from it back to the start/.test(x)), p.join('\n'));});

test('checkMap catches one-way stairs, stairs that arrive at a door, and steps through a landmark', () => {
  const m = clone(MAP);
  wayOf(m.rooms.gallery, 'court').oneWay = true;
  wayOf(m.rooms.landing2, 'climb').to = 'courtyard.well';
  m.rooms.courtyard.marks.push({ kind: 'pillar', at: [4, 2] });
  const p = checkMap(m);
  assert.ok(p.some((x) => /only a drop is one way/.test(x)));
  assert.ok(p.some((x) => /stairs up can't arrive at courtyard.well/.test(x)));
  assert.ok(p.some((x) => /overlap a landmark/.test(x)));
});

test('checkMap catches a way you can\'t walk to', () => {
  const m = clone(MAP);
  m.rooms.well.marks.push({ kind: 'blocks', blocks: [[0, 0, 4, 1, 1], [3, 0, 1, 4, 1]] });   // wall off the right column and top row
  const p = checkMap(m);
  assert.ok(p.some((x) => /can't walk to|blocked/.test(x)), p.join('\n'));
});
