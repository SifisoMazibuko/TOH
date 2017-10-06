import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { Location } from '@angular/common';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  // goBack(): void {
  // }
}