export class Robot {
  private static names: Set<string> = new Set();

  private _name: string | null;
  constructor() {
    this._name = null;
  }

  private tryAllocateName(name: string): boolean {
    if (Robot.names.has(name)) {
      return false;
    }

    Robot.names.add(name);
    return true;
  }

  private createName(): string {
    const number = Math.floor(Math.random() * 999);
    const generateRandomLetter = () => {
      const letters = Math.floor(Math.random() * 25.999)
      return String.fromCharCode('A'.charCodeAt(0) + letters)
    }

    return `${generateRandomLetter()}${generateRandomLetter()}` + 
      `${String(number).padStart(3, '0')}`
  }

  private generateName(): string {
    if (Robot.names.size > 1000 * 26 * 26) {
      throw new Error("No more names");
    }

    let result = false;
    let name = "";

    while (!result) {
      name = this.createName();
      result = this.tryAllocateName(name);
    }

    return name;
  }

  public get name(): string {
    if (!this._name) {
        this._name = this.generateName();
    }

    return this._name;
  }

  public resetName(): void {
    if (this._name) {
      this._name = null;
    }
  }

  public static releaseNames(): void {
    Robot.names.clear();
  }
}
