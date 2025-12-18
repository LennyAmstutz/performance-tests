import { assertEquals } from "@std/assert/equals";
import { letterFrequency } from "./frequency.js";

Deno.test("letter frequency", () => {
  const text = "abc AB a";
  const actual = letterFrequency(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});
