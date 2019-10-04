import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { PopularComponent} from './popular/popular.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'moviedetail', component: MovieDetailComponent },
  { path: 'populardetail', component:PopularComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
