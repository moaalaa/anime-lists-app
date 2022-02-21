import { Component, Input } from '@angular/core';
import { Anime } from '../Contrcuts/Anime';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent{

  @Input() anime?: Anime;

  constructor() { }


}
