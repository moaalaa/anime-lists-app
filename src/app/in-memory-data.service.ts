import { ANIMES } from './animes';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Anime } from './Contrcuts/Anime';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): {animes: Anime[]} {
    return { animes: ANIMES };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1) default first id.
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1 (incrementing id behavior).
  genId(animes: Anime[]): number {
    return animes.length > 0 ? Math.max(...animes.map(a => a.id)) + 1 : 1
  } 
}
