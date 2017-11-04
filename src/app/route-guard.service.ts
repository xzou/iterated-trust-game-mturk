import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { IpService } from './ip.service';
import { ParticipantService } from './participant/participant.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private ipService: IpService,
              private participantService: ParticipantService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ipService.isNewIp();
  }
}
