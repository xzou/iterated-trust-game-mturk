import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Opponent } from './opponent'; 

@Component({
  selector: 'tg-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css'],
  animations: [
    trigger('highlight', [
      transition('* => active', [
          animate(1500, style({ border: '10px solid black' }))
      ])
    ])
  ]
})

export class OpponentComponent implements OnInit {
  @Input() id: number;
  @Input() meanProp: number;
  @Input() name: string;
  @Input() directions: number[];
  @Input() img: string; 
  @Input() highlight: string;

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
