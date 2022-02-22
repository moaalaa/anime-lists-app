import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesComponent } from './animes/animes.component';
import { FormsModule } from '@angular/forms';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { MessagesComponent } from './messages/messages.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CreateAnimeComponent } from './create-anime/create-anime.component';
import { AnimeSearchComponent } from './anime-search/anime-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesComponent,
    AnimeDetailsComponent,
    MessagesComponent,
    TopBarComponent,
    DashboardComponent,
    CreateAnimeComponent,
    AnimeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
