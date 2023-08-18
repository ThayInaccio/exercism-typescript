export const colorCode = (color: string): number | null => {
  let value = COLORS.indexOf(color.toLowerCase());
  return value >= 0 ? value : null;
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]
