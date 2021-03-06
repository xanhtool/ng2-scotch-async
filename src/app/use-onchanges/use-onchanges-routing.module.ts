import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BloggerComponent} from './blogger/blogger.component';
const routes: Routes = [
  { path: 'use-onchanges', component: BloggerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseOnchangesRoutingModule { }
