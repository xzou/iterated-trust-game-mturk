/*
 * Component for the experiment's first page. The participant's
 * first name, age, gender, and IP are collected, and an entry is created
 * in the database. 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Participant } from '../participant/participant';
import { ParticipantService } from '../participant/participant.service';
import { CurParticipantService } from '../participant/cur-participant.service';

  @Component({
    selector: 'tg-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.css'],
    providers: [ ParticipantService ]
  })

export class NameComponent implements OnInit {

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService) { }

  ngOnInit() {
  }

  firstName: string = '';
  age: number;
  gender: string = '';
  isComplete: boolean = false;

  /* 
   * Saves the new participant to the database, and updates the participant's
   * information in the CurParticipantService which is shared across all
   * components. 
   */
  createParticipant() {
    const newParticipant = new Participant(this.firstName, this.age, this.gender, this.isComplete);
    this.participantService.addParticipant(newParticipant)
        .subscribe(participant => {
          this.curParticipantService.id = participant._id;
          this.curParticipantService.name = participant.name;
          this.curParticipantService.age = participant.age;
          this.curParticipantService.gender = participant.gender;
          this.curParticipantService.code = participant.mturkCode;

          this.router.navigateByUrl('/instructions', { replaceUrl: true });
        }); 
  } 
}
