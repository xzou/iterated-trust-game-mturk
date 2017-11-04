import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {

  canActivate() {
    console.log('RouteGuard#canActivate called');
    return true;
  }

  constructor() { }

}
