import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  answer: string = ''; 
  answerSubmitted: boolean = false;
  isCorrect: boolean;
  isFindOpponents: boolean = false;

  players: string[] = ['Chris', 'John', 'Thomas'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkAnswer(): void {
    if (this.answer === '1') {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
    this.answerSubmitted = true;
  }

  isFeedback(): boolean {
    return this.answerSubmitted; 
  }
}
