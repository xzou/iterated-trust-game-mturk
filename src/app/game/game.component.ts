import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { OpponentComponent } from '../opponent/opponent.component';

@Component({
  selector: 'tg-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, AfterViewInit {
  @ViewChildren(OpponentComponent) opponents: QueryList<OpponentComponent>

  endowment: number = 0.5;
  inRound: boolean = false;
  oppIds: number[];
  opponent: OpponentComponent; 
  oppSettings = [
    { id: 1, meanProp: .25, name: 'Chris' },
    { id: 2, meanProp: .5, name: 'John'},
    { id: 3, meanProp: .75, name: 'Thomas'}
  ]; 
  oppArray: OpponentComponent[]; 
  trialNumber: number = 0;
   
  constructor() { }

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

  drift() {
    this.opponent.player.drift(1);
  }

  playRound() {
    this.inRound = true;
    this.selectOpponent();
  }

  selectOpponent() {
    this.trialNumber++;
    if (this.trialNumber % 3 === 1) {
      this.oppIds = this.createRoundOrder(); 
    } 
    let oppId = this.oppIds.shift(); 
    this.opponent = this.oppArray[oppId];
  }

  setEndowment() {
    console.log(this.endowment);
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

