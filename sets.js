export function unique(elements) {
  const result = [];
  for (const e of elements) {
    if (!result.includes(e)) {
      result.push(e);
    }
  }
  return result;
}

export function diff(left, right) {
  const result = [];
  for (const l of left) {
    if (!right.includes(l)) {
      result.push(l);
    }
  }
  return result;
}
