import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';

import { AppRouterModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
