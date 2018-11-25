import { Injectable } from '@angular/core';
import { Hero} from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of} from 'rxjs'
import { MessageService} from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Fetched some heroes.");
    return of(HEROES);
  }

  getnewHeroList(): Hero[] {
    this.messageService.add("Fetched some heroes.");
    return HEROES;
  }

  constructor(private messageService: MessageService) { }
}
