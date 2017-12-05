import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informed-consent',
  templateUrl: './informed-consent.component.html',
  styleUrls: ['./informed-consent.component.css']
})
export class InformedConsentComponent implements OnDestroy {
  active: boolean = true;
  content: {[key: string]: any};
  consent: number = 0;

  constructor(private http: Http,
              private router: Router) { 
    this.http.get('/assets/informed_consent.json')
      .takeWhile(() => this.active)
      .subscribe(res => this.content = res.json());
  }

  ngOnDestroy() {
    this.active = false;
  }

  checkConsent(): void {
    if (this.consent === 1) {
      this.router.navigateByUrl('/instructions', { replaceUrl: true });
    } else {
      this.router.navigate(['/end'], { replaceUrl: true, queryParams: { condition: '0' } });
    }
  }
}
