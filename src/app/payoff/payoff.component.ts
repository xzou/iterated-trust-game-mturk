import { Component, OnInit } from '@angular/core';

import { NavButtonComponent } from '../nav-button/nav-button.component';
import { ParticipantService } from '../participant/participant.service';
import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'tg-payoff',
  templateUrl: './payoff.component.html',
  styleUrls: ['./payoff.component.css'],
  providers: [ ParticipantService ]
})

export class PayoffComponent implements OnInit {
  payoff: number; 

  netGains: number[]; 
  idx1: number;
  idx2: number;
  netGain1: number;
  netGain2: number; 

  constructor(private participantService: ParticipantService,
              private curParticipantService: CurParticipantService) {
    this.netGains = this.curParticipantService.netGains; 
    this.idx1 = Math.floor(Math.random() * this.netGains.length);
    do {
      this.idx2 = Math.floor(Math.random() * this.netGains.length);
    } while (this.idx2 === this.idx1)
    this.netGain1 = this.netGains[this.idx1];
    this.netGain2 = this.netGains[this.idx2];
    this.payoff = +((this.netGain1 + this.netGain2).toFixed(2));
  }

  ngOnInit() {
  }
}
