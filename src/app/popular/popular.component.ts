import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private movieService:MovieService ) { }

  ngOnInit() {
    this.getPopular();
  }
  moviePopular;
  getPopular():void{
    console.log('popular');
    this.movieService.getPopular().subscribe(movie => this.moviePopular=movie.results);
    
  }

}
