import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Participant } from '../participant/participant';
import { ParticipantService } from '../participant/participant.service';
import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'trust-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  providers: [ ParticipantService ]
})

export class NameComponent implements OnInit {

  constructor(private participantService: ParticipantService,
              private curParticipantService: CurParticipantService) { }

  ngOnInit() {
  }


  firstName: string = '';
  age: number;
  gender: string = '';
  isComplete: boolean = false;


  createParticipant() {
    const newParticipant = new Participant(this.firstName, this.age, this.gender, this.isComplete);
    this.participantService.addParticipant(newParticipant)
        .subscribe(participant => {
          this.curParticipantService.id = participant._id;
          this.curParticipantService.name = participant.name;
          this.curParticipantService.age = participant.age;
          this.curParticipantService.gender = participant.gender;
          this.curParticipantService.code = participant.mturkCode;
        });
  } 

}
