import { Injectable } from '@angular/core';
import { Hero, HEROES } from './mock-hero';
import { catchError, Observable, of, tap } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesURL = "http://localhost:3000/HEROES"

  constructor(private http: HttpClient) {
    console.log(JSON.stringify(HEROES));

  }

  getHeroes(): Observable<Hero[]> {


    return this.http.get<Hero[]>(this.heroesURL).pipe(
      tap(data => console.log(`Data: ${JSON.stringify(data)}`)),
      catchError(err => of([]))
    );
  }

  getHeroById(id: number): Observable<Hero> {
    const heroURL = `${this.heroesURL}/${id}`
    return this.http.get<Hero>(heroURL).pipe(
      tap(data => console.log(`Data: ${JSON.stringify(data)}`)),
      catchError(err => of())
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    const heroURL = `${this.heroesURL}/${hero.id}`
    return this.http.put<Hero>(heroURL, hero, httpOption).pipe(
      tap(updatedData => console.log(`Updated data: ${JSON.stringify(updatedData)}`)),
      catchError(err => of())
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesURL, hero, httpOption).pipe(
      tap(newData => console.log(`New data: ${JSON.stringify(newData)}`)),
      catchError(err => of())
    );
  }

  deleteHero(heroId: number): Observable<Hero> {
    const heroURL = `${this.heroesURL}/${heroId}`
    return this.http.delete<Hero>(heroURL, httpOption).pipe(
      tap(deletedData => console.log(`Deleted data: ${JSON.stringify(deletedData)}`)),
      catchError(err => of())
    );
  }

  searchHero(heroName: string): Observable<Hero[]> {
    if (heroName.trim().length == 0)
      return of([]);

    return this.http.get<Hero[]>(`${this.heroesURL}?name_like=${heroName}`).pipe(
      tap(data => console.log(`Data: ${JSON.stringify(data)}`)),
      catchError(err => of([]))
    );
  }
}
