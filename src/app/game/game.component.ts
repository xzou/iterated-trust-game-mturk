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
  oppId: number;
  opponent: OpponentComponent; 
  oppSettings = [
    { id: 1, meanProp: .25, name: 'Player A' },
    { id: 2, meanProp: .5, name: 'Player B'},
    { id: 3, meanProp: .75, name: 'Player C'}
  ]; 
  oppArray: OpponentComponent[]; 
   
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.oppArray = this.opponents.toArray();
  }

  selectOpponent() {
    this.oppId = Math.floor(Math.random() * 3);
    this.opponent = this.oppArray[this.oppId];
    console.log(this.opponent);
  }

  drift() {
    this.opponent.player.drift(1);
    console.log(this.opponent.player);
  }

  setEndowment() {
    console.log(this.endowment);
  }
}
