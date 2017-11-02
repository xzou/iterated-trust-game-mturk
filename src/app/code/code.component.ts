import { Component, OnInit } from '@angular/core';

import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})

export class CodeComponent implements OnInit {

  constructor(private curParticipantService: CurParticipantService) { }

  ngOnInit() {
    console.log(this.curParticipantService.code);
  }
}
