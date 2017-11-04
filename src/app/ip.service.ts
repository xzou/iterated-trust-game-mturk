import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { ParticipantService } from './participant/participant.service';

@Injectable()
export class IpService {

  constructor(private jsonp: Jsonp,
              private participantService: ParticipantService) { }

  isNewIp() {
    return true;
  }

  getIp() {
    return this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
                      .map(res => res.json().ip) 
  }

  private handleError(error) {
    let errMsg = (error.message) ? error.message : 
      error.status ? `${error.status} - ${error.statusText}` : 
      'Server error happening'; 
    console.log(errMsg);
  }
}
