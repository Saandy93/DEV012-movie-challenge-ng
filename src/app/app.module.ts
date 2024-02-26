import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { movieService } from './Services/movie.service'; 
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    ToolBarComponent,
    HeaderComponent 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
   
  ],
 
  
  providers: [movieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
