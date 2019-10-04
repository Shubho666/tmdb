import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
//import { TitlebarComponent } from './titlebar/titlebar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule}  from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    //TitlebarComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,MatCardModule,HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

