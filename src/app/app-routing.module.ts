import { Routes, RouterModule } from '@angular/router';

import { NameComponent } from './name/name.component';
import { GameComponent } from './game/game.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuizComponent } from './quiz/quiz.component';
import { OpponentSearchComponent } from './opponent-search/opponent-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: NameComponent },
  { path: 'game', component: GameComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'opponent-search', component: OpponentSearchComponent }
];

export const AppRouterModule = RouterModule.forRoot(routes);
