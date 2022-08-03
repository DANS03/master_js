import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';

import { VideogameComponent } from './videogame/videogame.component';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    ShoesComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
