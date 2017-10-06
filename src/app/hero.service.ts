import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Logger } from './logger.service';

@Injectable()
export class HeroService {
  constructor(private logger: Logger){}
  getHeroes(): Promise<Hero[]> {
    this.logger.log('Getting list of heroes');
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}