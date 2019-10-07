import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { PopularComponent} from './popular/popular.component';
import {SearchbarComponent} from './searchbar/searchbar.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'',component:MovieDetailComponent},
  { path: 'moviedetail', component: MovieDetailComponent },
  { path: 'populardetail', component:PopularComponent },
  { path: 'search/:searchQuery' ,component:SearchbarComponent},
  { path: 'search' ,component:MovieDetailComponent},
  { path: 'movie-description/:movieId', component:MovieDescriptionComponent}
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
