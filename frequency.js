const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);

export function letterFrequency(text) {
  const frequencies = [];
  for (const letter of text.toLowerCase()) {
    const charCode = letter.charCodeAt(0);
    if (charCode < aCharCode || charCode > zCharCode) {
      continue;
    }
    let found = false;
    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i].letter == letter) {
        frequencies[i].count++;
        found = true;
        break;
      }
    }
    if (!found) {
      frequencies.push({ letter, count: 1 });
    }
  }
  return frequencies.toSorted((a, b) => a.letter.localeCompare(b.letter));
}
