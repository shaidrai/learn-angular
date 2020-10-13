import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todo } from './todo/todo';
import { todoItem } from './todoItem/todoItem';

@NgModule({
  declarations: [
    AppComponent,
    Todo,
    todoItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
