import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  


  movieTrending;
  constructor(private movieService:MovieService){}
  ngOnInit(){
    //this.getTrending();
  }


  getTrending():void{
    console.log('working');
    this.movieService.getTrending().subscribe(movie => this.movieTrending=movie.results);
  }

}
