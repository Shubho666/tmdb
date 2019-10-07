import { Component, OnInit } from '@angular/core';
import {DescriptionService} from '../description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  movieDescription;
  constructor(private descriptionService:DescriptionService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.descriptionService.getDescription(this.route.snapshot.paramMap.get('movieId')).subscribe(movie => this.movieDescription=movie);
    
  }

}
