import { Component } from '@angular/core';
import { Dog } from './model/dog';
import { MockDogs } from './model/dog-data';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl : `dog-panel.component.html`,
    styleUrls: ['dog-panel.component.css']
})
export class DogPanel { 
  private _dog : Dog;
  mockDogs : Dog[] = MockDogs.SIX;

  constructor() {
    this._dog = new Dog(1, 'Rover', 5, "mongrel", true);
    console.log('Created: ', this);
  }
  get dog() { return this._dog; }
}
