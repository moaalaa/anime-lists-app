import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../animes/anime.service';
import { Anime } from '../Contrcuts/Anime';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  animes: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe(animes => this.animes = animes.slice(0, 4));
  }
}
