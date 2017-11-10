import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Http } from '@angular/http';

import { OpponentComponent } from '../opponent/opponent.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { ParticipantService } from '../participant/participant.service';
import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'tg-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [ ParticipantService ]
})

export class GameComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(OpponentComponent) opponents: QueryList<OpponentComponent>

  readonly totalTrials = 96;

  // Remove this later
  oppReturn: number; 

  endowment: number = 0.5;
  endowmentSubmitted: boolean = false;
  gameOver: boolean = false;
  inTrial: boolean = false;
  netGain: number = 0;
  oppIds: number[];
  opponent: OpponentComponent; 
  oppSettings: {
    id: number,
    name: string,
    meanProp: number,
    directions: number[],
    img: string;
  }[];
  oppArray: OpponentComponent[]; 
  playerImgPath: string = '/assets/images/player_purple.png';
  trialNumber: number = 1;

  constructor(private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private elementRef: ElementRef,
              private http: Http) {
    this.http.get('/assets/players.json')
        .subscribe((res) => this.oppSettings = res.json());
  }

  /* 
   * Angular lifecycle hooks
   */

  ngOnInit() {
  }

  ngOnDestroy() {
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe();
  }

  ngAfterViewInit() {
    this.opponents.changes.subscribe(() => {
      this.oppArray = this.opponents.toArray();
    });
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FDFBEB';
  }

  /*
   * Component functions
   */

  nextTrial(): void {
    this.inTrial = false;
    this.endowmentSubmitted = false;
    this.checkGameOver(); 
    this.trialNumber++;
  }

  selectOpponent(): void {
    this.inTrial = true;
    let oppId = this.getOppId(); 
    this.opponent = this.oppArray[oppId];
    this.checkDrift();
    this.curParticipantService.addOpponent(oppId + 1);
    this.curParticipantService.addProportion(this.opponent.player.meanProp);
  }

  setEndowment() {
    this.endowmentSubmitted = true;
    this.oppReturn = this.opponent.player.getReturn(this.endowment);
    this.netGain = +((1 - this.endowment + this.oppReturn).toFixed(2));
    this.curParticipantService.addEndowment(this.endowment);
    this.curParticipantService.addReturn(this.oppReturn);
    this.curParticipantService.addNetGain(this.netGain);
  }
 
  /*
   * Helper functions
   */

  checkDrift(): void {
    if (this.inVolatilityPeriod()) {
      let dirIdx = this.getDirectionsIdx(this.trialNumber);
      let direction = this.opponent.directions[dirIdx];
      this.opponent.player.drift(direction);
    }
  }

  checkGameOver(): void {
    if (this.trialNumber === this.totalTrials) {
      this.gameOver = true;
    }
  }

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

  getOppId(): number {
    if (this.trialNumber % 3 === 1) {
      this.oppIds = this.createRoundOrder();
    }
    return this.oppIds.shift();
  }

  inVolatilityPeriod(): boolean {
    if (this.trialNumber > 72 && this.trialNumber <= 84) {
      if (this.opponent.player.id === 2) 
        return true;
      return false;
    }
    let remainder = this.trialNumber % 24;
    return this.trialNumber < 84 && (remainder === 0 || remainder > 12 && remainder < 24);
  }

  /**
   * Returns the index of the drift direction in the directions array.
   * The direction index depends on the trial number. 
   * E.g. in rounds 11 through 20, the shift direction can be found
   * in directions[0].
   */
  getDirectionsIdx(trial: number) {
    let idx = Math.floor(trial / 24);
    if (trial % 24 === 0) {
      return idx - 1;
    }
    return idx;
  }
}

