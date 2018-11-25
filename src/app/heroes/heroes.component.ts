import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  
selectedHero: Hero
onSelect(hero: Hero): void {
this.selectedHero = hero;
}

refreshHeroesList() : void
{
  this.heroes = this.heroService.getnewHeroList();
}
    
  constructor(private heroService: HeroService) {
    
   }
  ngOnInit() {
    this.heroService.getHeroes().subscribe(blah => this.heroes = blah);
  }

}
