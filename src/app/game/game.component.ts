import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { OpponentComponent } from '../opponent/opponent.component';
import { ParticipantService } from '../participant/participant.service';
import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'tg-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, AfterViewInit {
  @ViewChildren(OpponentComponent) opponents: QueryList<OpponentComponent>

  // "Constants" for use in the drift function
  readonly up = 1;
  readonly down = -1;

  endowment: number = 0.5;
  endowmentSubmitted: boolean = false;
  inTrial: boolean = false;
  oppIds: number[];
  opponent: OpponentComponent; 
  oppSettings = [
    { id: 1, meanProp: .25, name: 'Chris', directions: [this.down, this.down, this.up] },
    { id: 2, meanProp: .5, name: 'John', directions: [this.down, this.up, this.up] },
    { id: 3, meanProp: .75, name: 'Thomas', directions: [this.up, this.up, this.up] }
  ]; 
  oppArray: OpponentComponent[]; 
  trialNumber: number = 0;

  constructor(private curParticipantService: CurParticipantService) { }

  /* 
   * Angular lifecycle hooks
   */

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.oppArray = this.opponents.toArray();
  }

  /*
   * Component functions
   */

  nextTrial(): void {
    this.inTrial = false;
    this.endowmentSubmitted = false;
  }

  selectOpponent(): void {
    this.inTrial = true;
    this.trialNumber++;
    if (this.trialNumber % 3 === 1) {
      this.oppIds = this.createRoundOrder(); 
    } 
    let oppId = this.oppIds.shift(); 
    this.opponent = this.oppArray[oppId];
    this.curParticipantService.addOpponent(oppId);

    if(this.inVolatilityPeriod()) {
      let dirIdx = this.getDirectionsIdx(this.trialNumber); 
      let direction = this.opponent.directions[dirIdx];
      this.opponent.player.drift(direction);
    }
  }

  setEndowment() {
    let oppReturn = this.opponent.player.getReturn(this.endowment);
    this.curParticipantService.addEndowment(this.endowment);
    this.curParticipantService.addReturn(oppReturn);
    this.endowmentSubmitted = true;
  }
 
  /*
   * Helper functions
   */

  createRoundOrder(): number[] {
    let ids: number[] = [];
    let id: number;
    for (let i = 0; i < 3; i++) {
      do {
        id = Math.floor(Math.random() * 3);
      } while (ids.includes(id));
      ids.push(id); 
    }
    return ids;
  }

  getRoundNumber(trial: number): number {
    while (trial - 60 > 0)
      trial -= 60;
    return trial;
  }

  inVolatilityPeriod(): boolean {
    let round = this.getRoundNumber(this.trialNumber); 
    return (
      (round > 10 && round <= 20) ||
      (round > 30 && round <= 40) ||
      (round > 50 && round <= 60)
    );
  }

  /**
   * Returns the index of the drift direction in the directions array.
   * The direction index depends on the trial number. 
   * E.g. in rounds 11 through 20, the shift direction can be found
   * in directions[0].
   */
  getDirectionsIdx(trial: number) {
    return Math.floor((trial - 10) / 10) / 2; 
  }
}

