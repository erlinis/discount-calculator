export default function map(fn) {
  return function innerMap(xs) {
    return xs.map(fn);
  };
}
