const resistor_colors= {
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
}

export function decodedResistorValue(colors: any) {
  const exponential = resistor_colors[colors[2] as keyof typeof resistor_colors]
  const mult = Number(`${resistor_colors[colors[0] as keyof typeof resistor_colors]}${resistor_colors[colors[1] as keyof typeof resistor_colors]}`)
  const value = mult * 10 ** exponential
  return value >= 1000 ? `${value/1000} kiloohms` : `${value} ohms`
}
