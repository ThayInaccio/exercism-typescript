export function decodedResistorValue(colors: any) {
  const resistor_colors= {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9,
  }
    type Color = keyof typeof resistor_colors
  function calculateResistor(colors:Color[]){
    let decodedColor = colors.map(color => resistor_colors[color])
    const value = Number(`${decodedColor[0]}${decodedColor[1]}`) * 10**decodedColor[2]
    console.log(value)
    return value >= 1000 ? `${value/1000} kiloohms` : `${value} ohms`
  }
  // const number = Number(`${resistor_colors[colors[0] as keyof typeof resistor_colors]}${resistor_colors[colors[1] as keyof typeof resistor_colors]}`)

  return calculateResistor(colors)

  // throw new Error('Remove this statement and implement this function')
}

