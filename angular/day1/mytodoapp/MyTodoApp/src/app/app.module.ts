import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodolistComponent} from './todolist/todolist.component';

import {FormsModule} from '@angular/forms';
import {ListboxComponent} from './listbox/listbox.component';
import {AutoInputWidthDirective} from './auto-input-width.directive';
import {MarkDirective} from './mark.directive';
import {MarkTextPipe} from './mark-text.pipe';
import {MyUpperCasePipe} from './my-upper-case.pipe';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AboutMeComponent} from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ListboxComponent,
    AutoInputWidthDirective,
    MarkDirective,
    MarkTextPipe,
    MyUpperCasePipe,
    AboutMeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: TodolistComponent},
      {path: 'about', component: AboutMeComponent},
      {path: '**', component: NotFoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
