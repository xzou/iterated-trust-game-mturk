import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

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
  isChoiceA: boolean;
  isFindOpponents: boolean = false;
  content = {};

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
    this.content = this.http.get('/assets/attention_check.json')
                            .subscribe((res) => this.content = res.json());
  }

  ngOnInit() {
  }

  checkAnswer(): void {
    if (this.answer === '1') {
      this.isChoiceA = true;
      this.curParticipantService.participant.isCorrect = true;
    } else {
      this.isChoiceA = false;
    }
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe(() => this.answerSubmitted = true);
  }
}

