import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  answer: string = ''; 
  answerSubmitted: boolean = false;
  isCorrect: boolean;

  constructor() { }

  ngOnInit() {
  }

  checkAnswer(): void {
    if (this.answer === '1') 
      this.isCorrect = true;
    else
      this.isCorrect = false;
    this.answerSubmitted = true;
  }

}
