export function isPangram_sol3(sentence: string): boolean {
  /*
  563
  537
  663
  */
  //587,66
  const regex = /([a-z])(?!.*\1)/g;
  sentence = sentence.toLowerCase();
  return sentence.match(regex)?.length === 26;
}

export function isPangram_sol2(sentence: string): boolean {
  /*
  521
  548
  515
  */
  //528
  sentence = sentence.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every((c) => sentence.includes(c));
}
export function isPangram1(sentence: string): boolean {
  /*
  510
  527
  522
  */
  //519,666
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let sentenceArray = sentence.toLowerCase().split("");
  return alphabet.every((element) => sentenceArray.includes(element));
}

export function isPangram(sentence: string): boolean {
  let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  let sentenceLowerCase: string = sentence.toLowerCase();
  let isPangram: boolean = true;

  for (let i = 0; i < alphabet.length; i++) {
    if (sentenceLowerCase.indexOf(alphabet[i]) === -1) {
      isPangram = false;
      break;
    }
  }

  return isPangram;
}
