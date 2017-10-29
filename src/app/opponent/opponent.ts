export class Opponent {
  public id: number;
  public meanProp: number;

  constructor (
    id?: number,
    meanProp?: number
  ) {
    this.id = id;
    this.meanProp = meanProp;
  }

  get amount(): number {
    return 1000;
  }

  drift(driftDirection): void {
    if (driftDirection < 0) {
      this.meanProp -= .025;
    } else {
      this.meanProp += .025;
    }
  }

}
