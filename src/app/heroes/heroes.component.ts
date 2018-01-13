import {Component, OnInit} from '@angular/core';
import { HEROES } from '../mock-heroes';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(public heroService: HeroService) {

  }

  ngOnInit() {
   /* this.heroService.getHeroes()
      .then(data => this.heroes = data);*/
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  /*getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }*/

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

 /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/


}
