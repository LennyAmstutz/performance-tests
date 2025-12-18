import { assertEquals } from "@std/assert/equals";
import { factorize, findPrimes } from "./primes.js";

Deno.test("prime numbers", () => {
  assertEquals(
    findPrimes(100),
    [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ],
  );
});

Deno.test("factorize 1", () => {
  assertEquals(factorize(1), [1]);
});

Deno.test("factorize 2", () => {
  assertEquals(factorize(2), [2]);
});

Deno.test("factorize 15", () => {
  assertEquals(factorize(15), [3, 5]);
});

Deno.test("factorize 1024", () => {
  assertEquals(factorize(1024), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
});

Deno.test("factorize 3631", () => {
  assertEquals(factorize(3631), [3631]);
});

Deno.test("factorize 7262", () => {
  assertEquals(factorize(7262), [2, 3631]);
});
