const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);

export function letterFrequency(text) {
  const counts = Array(26).fill(0);

  for (const letter of text.toLowerCase()) {
    const code = letter.charCodeAt(0);
    if (code < aCharCode || code > zCharCode) continue;
    counts[code - aCharCode]++;
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
    if (counts[i] > 0) {
      result.push({
        letter: String.fromCharCode(aCharCode + i),
        count: counts[i],
      });
    }
  }

  return result;
}
