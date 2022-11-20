import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'feature', component: FeaturesComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/feature', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
