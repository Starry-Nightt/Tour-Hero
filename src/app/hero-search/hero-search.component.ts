import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../mock-hero';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>
  private searchedSubject = new Subject<string>();

  constructor(private heroService: HeroService) {
  }

  search(searchedString: string){
    this.searchedSubject.next(searchedString);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString: string) => this.heroService.searchHero(searchedString))
    )
  }

}
