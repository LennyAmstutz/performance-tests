export type Entry = {
  letter: string;
  count: number;
};

const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);

export function letterFrequency(text: string): Array<Entry> {
  const frequencies: Array<Entry> = [];
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
  return frequencies.toSorted((a: Entry, b: Entry) =>
    a.letter.localeCompare(b.letter),
  );
}

export function letterFrequencyMap(text: string): Array<Entry> {
  const frequencies: Map<string, Entry> = new Map();
  for (const letter of text.toLowerCase()) {
    const charCode = letter.charCodeAt(0);
    if (charCode < aCharCode || charCode > zCharCode) {
      continue;
    }
    const entry: Entry = frequencies.get(letter) ?? { letter, count: 0 };
    frequencies.set(letter, { letter, count: entry.count + 1 });
  }
  return [...frequencies.values()].toSorted((a: Entry, b: Entry) =>
    a.letter.localeCompare(b.letter),
  );
}

export function letterFrequencyShift(text: string): Array<Entry> {
  const frequencies: Array<Entry> = new Array(26);
  for (let c = 0; c < 26; c++) {
    frequencies[c] = {
      letter: String.fromCharCode(c + aCharCode),
      count: 0,
    };
  }
  for (const letter of text.toLowerCase()) {
    const index = letter.charCodeAt(0) - aCharCode;
    if (index >= 0 && index < 26) {
      frequencies[index].count++;
    }
  }
  return frequencies
    .filter(({ count }) => count > 0)
    .toSorted((a: Entry, b: Entry) => a.letter.localeCompare(b.letter));
}
