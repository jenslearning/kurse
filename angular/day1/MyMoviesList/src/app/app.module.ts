import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MoveListComponent} from './move-list/move-list.component';
import {ListboxComponent} from './listbox/listbox.component';
import {HttpClientModule} from "@angular/common/http";
import {AboutMeComponent} from './about-me/about-me.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MoveListComponent,
    ListboxComponent,
    AboutMeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MoveListComponent},
      {path: 'about', component: AboutMeComponent},
      {path: '**', component: NotFoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
