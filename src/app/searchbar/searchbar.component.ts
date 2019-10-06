import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  movieSearch;
  constructor(private searchService:SearchService,private route: ActivatedRoute){}
  ngOnInit(){
    //this.getTrending();
    //console.log(this.route.snapshot.paramMap.get('searchQuery'));
    

    this.searchService.getSearch(this.route.snapshot.paramMap.get('searchQuery')).subscribe(movie => this.movieSearch=movie.results);
    
  }

  reloadwindow(){
    window.location.reload();
  }
  // getSearch():void{
  //   console.log('woking');
  //   //this.movieService.getSearch(query).subscribe(movie => this.movieSearch=movie.results);
  // }
}
