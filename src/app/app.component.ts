import { Component } from '@angular/core';
import { MovieDetailComponent } from '../app/movie-detail/movie-detail.component';
import {MovieService} from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';

  getTrending(){
    
  }
  
  
  
}
