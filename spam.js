const spamWords = [
  "ai",
  "bitcoin",
  "bonus",
  "buy",
  "cash",
  "chance",
  "charges",
  "cloud",
  "confidential",
  "congratulations",
  "data-driven",
  "dollar",
  "expires",
  "exclusive",
  "fast",
  "fee",
  "friend",
  "gain",
  "hidden",
  "income",
  "immediately",
  "limited",
  "lottery",
  "marketing",
  "money",
  "now",
  "order",
  "password",
  "price",
  "quick",
  "risk",
  "ultra",
  "urgent",
  "viagra",
  "weight",
  "winner",
  "xxx",
  "zero",
];
const spamSet = new Set(spamWords);
const wordRegex = /([a-z]+)/i;

export function classify(message) {
  const words = message.split(" ");
  const nWords = words.length;
  let suspiciousWords = 0;

  for (const w of words) {
    const match = w.match(wordRegex);
    if (!match) continue;

    if (spamSet.has(match[0].toLowerCase())) {
      suspiciousWords++;
    }
  }

  return suspiciousWords / nWords;
}
