// test-map.js: the look test's three rooms, taken from the maze's own map (tile/map.js). Two changes: the
// Courtyard's way into the Gallery is a door here (it's a gap in the wall in step 1), so the test has a door,
// a pair of stairs and a walkway to try; and the Gallery's walkway is at its short end. Ways into rooms outside the
// test stay drawn but say so.
import { MAP } from '../../tile/map.js';

export const TEST_ROOMS = ['courtyard', 'gallery', 'landing1'];

export function testMap() {
  const m = structuredClone(MAP);
  const w = m.rooms.courtyard.ways.find((x) => x.id === 'gallery');
  w.kind = 'door';
  // The Gallery is entered from its short end (owner, Oct 25): arriving at its se end you look down its 8-block
  // length, the blind arches on your right. (Across its 3-block depth the far wall filled the view.)
  const g = m.rooms.gallery.ways.find((x) => x.id === 'court');
  Object.assign(g, { side: 'se', at: 1 });
  return m;
}
