export class Opponent {
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

  drift(driftDirection): void {
    if (driftDirection < 0 && this._meanProp > 1) {
      this._meanProp -= .025;
    } else if (driftDirection > 0 &&  this._meanProp < 1){
      this._meanProp += .025;
    }
  }

}
