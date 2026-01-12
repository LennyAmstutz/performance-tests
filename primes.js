export function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    const max = Math.sqrt(i);

    for (let j = 2; j <= max; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}


export function factorize(n) {
  if (n < 1) {
    throw new Error(`cannot factor {n}: only positive numbers allowed`);
  }
  if (n == 1) {
    return [1];
  }
  const primesUpToN = findPrimes(n);
  let [prime, ...primes] = primesUpToN;
  const factors = [];
  do {
    if (n % prime == 0) {
      factors.push(prime);
      n /= prime;
    } else {
      [prime, ...primes] = primes;
    }
  } while (n > 1);
  return factors;
}
