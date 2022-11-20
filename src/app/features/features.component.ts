import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../mock-hero';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  heroes: Hero[];
  title= 'Top Heroes'

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
