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
  inRound: boolean = false;
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

  drift(): void {
    console.log(this.opponent.directions);
    var direction = this.opponent.directions[0];
    console.log(direction);
    this.opponent.player.drift(direction);
  }

  selectOpponent(): void {
    this.inRound = true;
    this.trialNumber++;
    if (this.trialNumber % 3 === 1) {
      this.oppIds = this.createRoundOrder(); 
    } 
    let oppId = this.oppIds.shift(); 
    this.opponent = this.oppArray[oppId];
    this.curParticipantService.addOpponent(oppId);
  }

  setEndowment() {
    let oppReturn = this.opponent.player.getReturn(this.endowment);
    this.curParticipantService.addEndowment(this.endowment);
    this.curParticipantService.addReturn(oppReturn);
    this.inRound = false;
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
}

