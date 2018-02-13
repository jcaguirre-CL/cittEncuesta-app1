import { Injectable } from '@angular/core';

export class Hero {
  constructor(public name: string, public state = 'inactive') { }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}

const ALL_HEROES = [
  'Windstorm',
  'RubberMan',
  'Mr. Nice'
].map(name => new Hero(name));

@Injectable()
export class HeroService {

  heroes: Hero[] = [];

  canAdd() {
    return this.heroes.length < ALL_HEROES.length;
  }
  canRemove() {
    return this.heroes.length > 0;
  }
  addActive(active = true) {
    let hero = ALL_HEROES[this.heroes.length];
    hero.state = active ? 'active' : 'inactive';
    this.heroes.push(hero);
  }
  addInactive() {
    this.addActive(false);
  }
  remove() {
    this.heroes.length -= 1;
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/