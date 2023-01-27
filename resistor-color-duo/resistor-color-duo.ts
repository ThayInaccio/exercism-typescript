export function decodedValue(arr: Array<string>): Number {
  if (arr.length < 2) {
    throw "Informar pelo menos duas cores.";
  }
  interface Color {
    [c: string]: number;
  }
  const colorsMap: Color = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  return Number(`${colorsMap[arr[0]]}${colorsMap[arr[1]]}`);
}
