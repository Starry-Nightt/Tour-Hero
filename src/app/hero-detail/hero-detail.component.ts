import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../mock-hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero
  title="Details"

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location

  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
  }

  onSave():void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
