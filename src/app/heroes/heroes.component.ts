import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'My Heroes'
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  addHero(name: string): void{
    name  = name.trim();
    if (!name || name.length === 0){
      alert('Name field is invalid')
      return;
    }
    const newHero: Hero = {
      id: this.heroes[this.heroes.length-1].id + 1,
      name
    }
    this.heroService.addHero(newHero).subscribe(newHero => this.heroes.push(newHero));
  }

  deleteHero(id: number):void {
    this.heroService.deleteHero(id).subscribe(() =>this.heroes = this.heroes.filter(item => item.id !== id));
  }

}
