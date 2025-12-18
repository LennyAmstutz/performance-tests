import { assertEquals } from "@std/assert/equals";
import { diff, unique } from "./sets.js";

Deno.test("unique", () => {
  assertEquals(
    unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  );
});

Deno.test("diff", () => {
  const xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ys = [1, 3, 5, 7, 9];
  const zs = [0, 2, 4, 6, 8];
  assertEquals(diff(xs, ys), zs);
});
