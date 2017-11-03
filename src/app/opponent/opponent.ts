export class Opponent {

  // Rate at which mean proportion drifts
  readonly rate: number = .05; 

  private _id: number;
  private _meanProp: number;
  private _name: string;

  constructor (
    id?: number,
    meanProp?: number,
    name?: string
  ) {
    this._id = id;
    this._meanProp = meanProp;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get meanProp(): number {
    return this._meanProp;
  }

  set meanProp(prop: number) {
    this._meanProp = prop;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  /* 
   * Changes the mean proportion based on preset directions.
   * For the calculation, meanProp and rate are multiplied by 1000
   * in order to avoid JavaScript floating point precision issue.
   */
  drift(driftDirection: number): void {
    var meanPropShifted = this._meanProp * 1000; 
    var rate = this.rate * 1000;
    if (driftDirection < 0 && (meanPropShifted - rate) >= 0) {
      meanPropShifted -= rate;
      this._meanProp = meanPropShifted / 1000;
    } else if (driftDirection > 0 &&  (meanPropShifted + rate) <= 1000){
      meanPropShifted += rate;
      this._meanProp = meanPropShifted / 1000;
    }
  }

  getReturn(endowment: number) {
    let proportion = this.rnorm(this.meanProp, .05); 
    return +((proportion * (3 * endowment)).toFixed(2)); 
  }

  /**
   * Generates a random number from a Gaussian distribution
   * Based on http://c-faq.com/lib/gaussian.html and
   * https://github.com/robbrit/randgen/blob/master/lib/randgen.js
   */
  rnorm(mean: number, sd: number): number {
    var v1, v2, u1, u2, s, x;
    var phase = 0;
    if (mean === undefined) mean = 0.0;
    if (sd === undefined) sd = 1.0;

    if (phase == 0) {
      do {
        u1 = Math.random();
        u2 = Math.random();

        v1 = 2 * u1 - 1;
        v2 = 2 * u2 - 1;
        s = v1 * v1 + v2 * v2;
      } while (s === 0 || s >= 1);

      x = v1 * Math.sqrt(-2 * Math.log(s) / s);
    } else {
      x = v2 * Math.sqrt(-2 * Math.log(s) / s);
    }
    phase = 1 - phase;
    
    return x * sd + mean;
  }
}
