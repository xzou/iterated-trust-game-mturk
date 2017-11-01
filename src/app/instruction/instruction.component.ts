import { Component, EventEmitter, OnInit, AfterViewInit, Input, Output } from '@angular/core';

@Component({
  selector: 'tg-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit, AfterViewInit {
  @Input() page: number;
  @Input() text: string;
  @Input() imgSrc: string;

  @Output() pageChange = new EventEmitter<number>();

  curPage: number;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.curPage = this.page; 
  }

  setPage(page: number): void {
    this.page = page;
    this.pageChange.emit(this.page);
  }
}
