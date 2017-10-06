import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';

({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() : void {
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  goBack(): void {
    this.location.back();
  }

}
