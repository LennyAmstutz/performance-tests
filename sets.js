export function unique(elements) {
  const result = [];
  for (const e of elements) {
    if (!result.includes(e)) {
      result.push(e);
    }
  }
  return [...new Set(elements)];
}

export function diff(left, right) {
  const rightSet = new Set(right);
  for (const l of left) {
    if (!right.includes(l)) {
      result.push(l);
    }
  }
  return left.filter(e => !rightSet.has(e));
}
