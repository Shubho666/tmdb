import { Component, OnInit,Input } from '@angular/core';
import {MovieService}  from '../movie.service';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private movieService: MovieService,private router:Router) { }
  @Input() movie;
  ngOnInit() {
  }
  movie_description(){
    //console.log('card working');
    this.router.navigate(["/movie-description/"+this.movie.id]);

  }

}
