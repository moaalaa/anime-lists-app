import { Component, OnInit } from '@angular/core';
import { Anime } from '../Contrcuts/Anime';
import { MessagesService } from '../messages/messages.service';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  animes: Anime[] = [];

  selectedAnime?: Anime;

  constructor(private animeService: AnimeService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe(animes => this.animes = animes);
  }

  onClick(anime: Anime): void {
    this.selectedAnime = anime;

    this.messageService.message(`You selected ${anime.name} anime that have id = ${anime.id}`);
  }
}
