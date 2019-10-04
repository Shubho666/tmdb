import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }
  API_KEY="8dc2a09fce56ed80b43b7548c1377e67";
  public getTrending():Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.API_KEY}`);
      
  }
}
