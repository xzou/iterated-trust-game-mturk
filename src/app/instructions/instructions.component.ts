import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { InstructionComponent } from '../instruction/instruction.component';

@Component({
  selector: 'tg-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})

export class InstructionsComponent implements OnInit {
  page: number = 1;
  instructions: {page: number, text: string, imgSrc: string}[];

  constructor(private http: Http) {
    this.http.get('/assets/instructions.json')
              .subscribe(res => this.instructions = res.json()); 
  }

  ngOnInit() {
  }

  setPage(page: number): void {
    this.page = page;
  }

  pageChange(page: number): void{
    this.page = page;
  }
}
