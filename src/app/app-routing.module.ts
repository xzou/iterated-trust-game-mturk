import { Routes, RouterModule } from '@angular/router';

import { NameComponent } from './name/name.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: NameComponent },
];

export const AppRouterModule = RouterModule.forRoot(routes);
