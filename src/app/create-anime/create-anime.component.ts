import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../animes/anime.service';
import { Anime } from '../Contrcuts/Anime';

@Component({
  selector: 'app-create-anime',
  templateUrl: './create-anime.component.html',
  styleUrls: ['./create-anime.component.css']
})
export class CreateAnimeComponent {

  constructor(
    private animeService: AnimeService,
    private location: Location,
  ) { }


  goBack(): void {
    this.location.back();
  }

  create(anime_name: string): void {
    anime_name.trim();

    if (!anime_name) return;
    
    this.animeService.create(({ name: anime_name } as Anime)).subscribe(() => this.goBack());
  }
}
