import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BlogService} from './blog.service';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

import {UseIfModule} from './use-if/use-if.module';
import {UseOnchangesModule} from './use-onchanges/use-onchanges.module';
import {UseRxjsModule} from './use-rxjs/use-rxjs.module';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    UseIfModule,
    UseOnchangesModule,
    UseRxjsModule,
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
