import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  oppId: number;
  endowment: number;

  selectOpponent() {
    this.oppId = Math.floor(Math.random() * 3) + 1;
  }

  setEndowment() {
    console.log(this.endowment);
  }
}
