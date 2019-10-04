import { Component, OnInit,Input } from '@angular/core';
import {MovieService}  from '../movie.service';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  @Input() movie;
  ngOnInit() {
  }

}
