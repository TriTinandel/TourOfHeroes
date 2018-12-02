import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
//What are these? Well, not HeroService obviously, but...
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input can almost be thought of as an inheritance or permissions thing. 
  //Without this directive, "hero" is essentially private. You can only mess with it in this class.
  //WITH @Input, the parent component can access it too.... very important for any kind of Detail component. Which are pretty damn important things.
  @Input() hero: Hero

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void
  {
    //Use Activated Route data to pull the ID field out of the querystring, as defined in routes.
    //route.snapshot is a static image of the route info for the current request, from just after the component was created.
    //The paramMap is a dictionary and lets you pull any parameter you want.
    //The javascript + operator converts the string value to an int. Querystrings are always strings.
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(x => this.hero = x);
  }

  goBack(): void
  {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
