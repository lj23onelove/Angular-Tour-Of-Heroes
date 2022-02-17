import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Iron Man'},
      {id: 2, name: 'Hulk'},
      {id: 3, name: 'Thor'},
      {id: 4, name: 'Spider-Man'},
      {id: 5, name: 'Wolverine'},
      {id: 6, name: 'Hawkeye'},
      {id: 7, name: 'Doctor Strange'},
      {id: 8, name: 'Bucky'},
      {id: 9, name: 'Wanda'},
      {id: 10, name: 'Black Widow'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

}

