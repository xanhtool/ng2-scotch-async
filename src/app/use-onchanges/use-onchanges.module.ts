import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggerComponent } from './blogger/blogger.component';
import { PostsComponent } from './posts/posts.component';

import {UseOnchangesRoutingModule} from './use-onchanges-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UseOnchangesRoutingModule
  ],
  declarations: [
    BloggerComponent,
    PostsComponent,
  ]
})
export class UseOnchangesModule { }
