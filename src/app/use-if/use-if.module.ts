import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseIfRoutingModule } from './use-if-routing.module';
import {BloggerComponent} from './blogger/blogger.component';
import {PostsComponent} from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    UseIfRoutingModule
  ],
  declarations: [
    BloggerComponent,
    PostsComponent,
  ]
})
export class UseIfModule { }
