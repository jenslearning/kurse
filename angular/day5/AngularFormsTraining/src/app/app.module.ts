import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
import { IdentityRevealedValidatorDirective } from './identity-revealed-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
