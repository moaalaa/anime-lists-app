import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimesComponent } from './animes/animes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'animes', component: AnimesComponent },
  { path: 'anime-details/:id', component: AnimeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
