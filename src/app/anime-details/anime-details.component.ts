import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../animes/anime.service';
import { Anime } from '../Contrcuts/Anime';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  anime?: Anime;

  termsAccepted?: string;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.animeService.getAnime(id).subscribe(anime => this.anime = anime);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    if (this.anime) {
      this.animeService.update(this.anime).subscribe(() => this.goBack());
    }
  }

}
