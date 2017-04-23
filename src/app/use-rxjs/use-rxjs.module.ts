import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggerComponent } from './blogger/blogger.component';
import { PostsComponent } from './posts/posts.component';

import {UseRxjsRoutingModule} from './use-rxjs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UseRxjsRoutingModule
  ],
  declarations: [
    BloggerComponent,
    PostsComponent,
  ]
})
export class UseRxjsModule { }
