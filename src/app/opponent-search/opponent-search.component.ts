import { Component, OnInit } from '@angular/core';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-opponent-search',
  templateUrl: './opponent-search.component.html',
  styleUrls: ['./opponent-search.component.css']
})

export class OpponentSearchComponent implements OnInit {
  opponentFound: boolean = false;
  players: string[] = ['Chris', 'John', 'Tom'];
  
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.opponentFound = true, 8000);
  }
}
