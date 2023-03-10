export function toRna(dnaStrand: string): string {
  const nucleotideMap = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return [...dnaStrand]
    .map((nucleotide) => {
      const newNucleotide =
        nucleotideMap[nucleotide as keyof typeof nucleotideMap];
      if (newNucleotide == null) {
        throw new Error("Invalid input DNA.");
      }
      return newNucleotide;
    })
    .join("");
}
