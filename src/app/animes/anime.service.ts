import { MessagesService } from './../messages/messages.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ANIMES } from '../animes';
import { Anime } from '../Contrcuts/Anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private messagesService: MessagesService) { }

  getAnimes(): Observable<Anime[]> {
    this.messagesService.message('AnimeService: Fetching Animes');

    const animes = of(ANIMES);

    this.messagesService.message('AnimeService: Fetched Animes');

    return animes;
  }

  getAnime(id: number): Observable<Anime> {

    const anime = ANIMES.find(a => a.id === id)!;

    this.messagesService.message(`AnimeService: fetched ${anime.name} anime id=${anime.id}`);

    return of(anime);
  }
}
