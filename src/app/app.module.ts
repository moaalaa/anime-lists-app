import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesComponent } from './animes/animes.component';
import { FormsModule } from '@angular/forms';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { MessagesComponent } from './messages/messages.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesComponent,
    AnimeDetailsComponent,
    MessagesComponent,
    TopBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
