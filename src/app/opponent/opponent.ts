export class Opponent {
  public id: number;
  public meanProp: number;
  public name: string;

  constructor (
    id?: number,
    meanProp?: number,
    name?: string
  ) {
    this.id = id;
    this.meanProp = meanProp;
    this.name = name;
  }

  drift(driftDirection): void {
    if (driftDirection < 0) {
      this.meanProp -= .025;
    } else {
      this.meanProp += .025;
    }
  }

}
