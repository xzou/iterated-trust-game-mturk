import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Participant } from '../participant/participant';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'trust-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  providers: [ ParticipantService ]
})

export class NameComponent implements OnInit {

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }


  firstName: string = '';
  age: number;
  gender: string = '';
  isComplete: boolean = false;


  createParticipant() {
    var newParticipant = new Participant(this.firstName, this.age, this.gender, this.isComplete);
    this.participantService.addParticipant(newParticipant)
        .subscribe(player => {
          console.log(player);
        });
  } 

}
