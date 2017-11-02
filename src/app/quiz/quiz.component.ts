import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [ ParticipantService ]
})

export class QuizComponent implements OnInit {
  answer: string = ''; 
  answerSubmitted: boolean = false;
  isCorrect: boolean;
  isFindOpponents: boolean = false;

  players: string[] = ['Chris', 'John', 'Thomas'];

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService) { }

  ngOnInit() {
  }

  checkAnswer(): void {
    if (this.answer === '1') {
      this.isCorrect = true;
      this.curParticipantService.participant.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe(() => this.answerSubmitted = true);
  }
}

