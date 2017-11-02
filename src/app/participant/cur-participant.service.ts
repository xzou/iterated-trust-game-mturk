import { Injectable } from '@angular/core';

import { Participant } from './participant';

@Injectable()
export class CurParticipantService {

  constructor() { }

  private _participant: Participant = {
    _id: '',
    age: 0,
    gender: '',
    ip: '',
    isComplete: false,
    isCorrect: false,
    mturkCode: '',
    name: '',
    payoff: 0,
    endowment: [],
    proportion: [],
    opponentNumber: [],
    reactionTime: [],
    returned: []
  };

  get participant(): Participant {
    return this._participant;
  }

  set id(id: string) {
    this._participant._id = id;
  }

  get age(): number {
    return this._participant.age;
  }

  set age(age: number) {
    this._participant.age = age;
  }

  get gender(): string {
    return this._participant.gender;
  }

  get code(): string {
    return this._participant.mturkCode;
  }

  set code(mturkCode: string) {
    this._participant.mturkCode = mturkCode;
  }

  set gender(gender: string) {
    this._participant.gender = gender;
  }

  get ip(): string {
    return this._participant.ip;
  }

  set ip(ip: string) {
    this._participant.ip = ip;
  }

  get isCorrect(): boolean {
    return this._participant.isCorrect;
  }

  set isCorrect(state: boolean) {
    this._participant.isCorrect = state; 
  }

  get name(): string {
    return this._participant.name;
  }

  set name(firstName: string) {
    this._participant.name = firstName;
  }

  get payoff(): number {
    return this._participant.payoff;
  }

  set payoff(amount: number) {
    this._participant.payoff = amount;
  }

  get opponents(): number[] {
    return this._participant.opponentNumber;
  }

  addOpponent(num: number) {
    this._participant.opponentNumber.push(num);
  }

  get endowments(): number[] {
    return this._participant.endowment; 
  }

  addEndowment(amount: number) {
    this._participant.endowment.push(amount);
  }

  get returns(): number[] {
    return this._participant.returned;
  }

  addReturn(amount: number) {
    this._participant.returned.push(amount);
  }

  get reactionTimes(): number[] {
    return this._participant.reactionTime;
  }

  addReactTime(time: number) {
    this._participant.reactionTime.push(time);
  }

  get proportions(): number[] {
    return this._participant.proportion;
  }

  addProportion(proportion: number) {
    this._participant.proportion.push(proportion);
  }

  setComplete() {
    this._participant.isComplete = true;
  }
}
