import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(app_routes);
