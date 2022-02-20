import { Component } from '@angular/core';
import { ANIMES } from '../animes';
import { Anime } from '../Contrcuts/Anime';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent{
  anime: Anime = {
    id: 1,
    name: 'Black Clover',
  };

  animes = ANIMES;
  
  selectedAnime?: Anime;

  onClick(anime: Anime): void {
    this.selectedAnime = anime;
  }
}
