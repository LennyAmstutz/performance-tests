export function unique(elements) {
  return [...new Set(elements)];
}

export function diff(left, right) {
  const rightSet = new Set(right);
  return left.filter(e => !rightSet.has(e));
}
