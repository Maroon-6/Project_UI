import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Cocktail } from './cocktail';
import { MessageService } from './message.service';


@Injectable({providedIn: 'root'})
export class CocktailService {
  private cocktailsUrl = 'api/cocktails';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  /** GET cocktails from the server */
  getCocktails(): Observable<Cocktail[]> {
      return this.http.get<Cocktail[]>(this.cocktailsUrl)
      .pipe(
        tap(_ => this.log('fetched cocktails')),
        catchError(this.handleError<Cocktail[]>('getCocktails', []))
      );
    }

  /** GET Cocktail by id. Will 404 if id not found */
  getCocktail(id: number): Observable<Cocktail> {
    const url = `${this.cocktailsUrl}/${id}`;
    return this.http.get<Cocktail>(url).pipe(
      tap(_ => this.log(`fetched cocktail id=${id}`)),
      catchError(this.handleError<Cocktail>(`getCocktail id=${id}`))
    );
  }

  /* GET cocktails whose name contains search term */
  searchCocktails(term: string): Observable<Cocktail[]> {
    if (!term.trim()) {
      // if not search term, return empty Cocktail array.
      return of([]);
    }
    return this.http.get<Cocktail[]>(`${this.cocktailsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
          this.log(`found cocktails matching "${term}"`) :
          this.log(`no cocktails matching "${term}"`)),
      catchError(this.handleError<Cocktail[]>('searchCocktails', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Cocktail to the server */
  addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http.post<Cocktail>(this.cocktailsUrl, cocktail, this.httpOptions).pipe(
      tap((newCocktail: Cocktail) => this.log(`added cocktail w/ id=${newCocktail.id}`)),
      catchError(this.handleError<Cocktail>('addCocktail'))
    );
  }

  /** DELETE: delete the cocktail from the server */
  deleteCocktail(id: number): Observable<Cocktail> {
    const url = `${this.cocktailsUrl}/${id}`;

    return this.http.delete<Cocktail>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted cocktail id=${id}`)),
      catchError(this.handleError<Cocktail>('deleteCocktail'))
    );
  }

  /** PUT: update the cocktail on the server */
  updateCocktail(cocktail: Cocktail): Observable<any> {
    return this.http.put(this.cocktailsUrl, cocktail, this.httpOptions).pipe(
      tap(_ => this.log(`updated cocktail id=${cocktail.id}`)),
      catchError(this.handleError<any>('updateCocktail'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CocktailService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CocktailService: ${message}`);
  }
}