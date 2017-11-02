import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';

import { AppRouterModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { OpponentComponent } from './opponent/opponent.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { InstructionComponent } from './instruction/instruction.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { QuizComponent } from './quiz/quiz.component';
import { OpponentSearchComponent } from './opponent-search/opponent-search.component';
import { CodeComponent } from './code/code.component';
import { PayoffComponent } from './payoff/payoff.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    GameComponent,
    OpponentComponent,
    InstructionsComponent,
    InstructionComponent,
    NavButtonComponent,
    QuizComponent,
    OpponentSearchComponent,
    CodeComponent,
    PayoffComponent
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
