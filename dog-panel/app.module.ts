import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { DogPanel }  from './dog-panel.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ DogPanel ],
  bootstrap:    [ DogPanel ]
})
export class AppModule { }
