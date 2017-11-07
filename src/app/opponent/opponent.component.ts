import { Component, OnInit, Input } from '@angular/core';

import { Opponent } from './opponent'; 

@Component({
  selector: 'tg-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css']
})

export class OpponentComponent implements OnInit {
  @Input() id: number;
  @Input() meanProp: number;
  @Input() name: string;
  @Input() directions: number[];
  @Input() img: string; 

  private _player: Opponent;

  constructor() {
  }

  get player(): Opponent {
    return this._player;
  }

  ngOnInit() {
    this._player = new Opponent(this.id, this.meanProp, this.name);
  }

}
