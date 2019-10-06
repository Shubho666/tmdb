import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';



import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule}  from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopularComponent } from './popular/popular.component';
import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


import {ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    //TitlebarComponent,
    MovieDetailComponent,
    PopularComponent,
    
    CardComponent,
    
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,MatButtonModule,FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }

