import { MessagesService } from './../messages/messages.service';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ANIMES } from '../animes';
import { Anime } from '../Contrcuts/Anime';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private baseUrl = 'api/animes';

  constructor(
    private messagesService: MessagesService,
    private http: HttpClient,
  ) { }

  getAnimes(): Observable<Anime[]> {
    this.log('AnimeService: Fetching Animes');

    return this.http.get<Anime[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('AnimeService: Fetched Animes')),
        catchError(
          this.handleError<Anime[]>('getAnimes', [])
        )
      );
  }

  search(keyword: string): Observable<Anime[]> {
    if (! keyword.trim()) return of([]);

    return this.http.get<Anime[]>(`${this.baseUrl}/?name=${keyword}`)
      .pipe(
        tap(animes => {
          if (animes.length <= 0) return this.log(`AnimeService: No matches Animes for keyword: (${keyword}) were found`);

          return this.log(`AnimeService: Found (${animes.length}) matches Animes for keyword: (${keyword})`);
        }),
        catchError(
          this.handleError<Anime[]>('SearchAnimes', [])
        )
      );
  }

  getAnime(id: number): Observable<Anime> {

    this.log(`AnimeService: fetching anime with id=${id}`);

    // this.log(`AnimeService: fetched ${anime.name} anime id=${anime.id}`);

    return this.http.get<Anime>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`AnimeService: fetched anime with id=${id}`)),
        catchError(
          this.handleError<Anime>('getAnime')
        )
      );
  }

  create(anime: Anime): Observable<Anime> {
    this.log(`AnimeService: Creating Anime with name=${anime.name}`);

    return this.http.post<Anime>(this.baseUrl, anime, this.httpOptions)
      .pipe(
        tap((createdAnime: Anime) => this.log(`AnimeService: Created Anime with id=${createdAnime.id}`)),
        catchError(
          this.handleError<Anime>('createAnime')
        )
      );
  }
  
  update(anime: Anime): Observable<any> {
    this.log(`AnimeService: Updating Anime with id=${anime.id}`);

    return this.http.put(this.baseUrl, anime, this.httpOptions)
      .pipe(
        tap(_ => this.log(`AnimeService: Updated Anime with id=${anime.id}`)),
        catchError(
          this.handleError<any>('updateAnime', [])
        )
      );
  }
  
  delete(anime_id: number): Observable<Anime> {
    this.log(`AnimeService: deleting Anime with id=${anime_id}`);

    return this.http.delete<Anime>(`${this.baseUrl}/${anime_id}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`AnimeService: deleted Anime with id=${anime_id}`)),
        catchError(
          this.handleError<any>('deleteAnime', [])
        )
      );
  }

  private log(message: string) {
    this.messagesService.message(message);

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(results as T);
    };
  }
}
