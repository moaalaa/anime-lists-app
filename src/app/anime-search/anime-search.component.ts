import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { AnimeService } from '../animes/anime.service';
import { Anime } from '../Contrcuts/Anime';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.css']
})
export class AnimeSearchComponent implements OnInit {

  animes$!: Observable<Anime[]>;

  private keyword = new Subject<string>();

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animes$ = this.keyword.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((keyword: string) => this.animeService.search(keyword)),
    );

    // .subscribe(); we could subscribe but we use switchMap better
  }

  // Push a search term into the observable stream.
  searchAnime(keyword: string) {
    this.keyword.next(keyword);
  }

}
