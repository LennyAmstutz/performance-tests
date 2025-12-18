export function findPrimes(limit) {
  const isPrime = (x) => {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
      }
    }
    return true;
  };
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
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
