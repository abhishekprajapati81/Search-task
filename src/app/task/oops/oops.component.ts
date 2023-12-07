import { Component, OnInit } from '@angular/core';
import { Action } from './Encapsulation';
import { animalSound, cat, dog } from './Polymorphism';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
})
export class OopsComponent implements OnInit {
  ngOnInit(): void {
    const player = new Action('abhi');
    const enemy = new Action('raju');
    player.shoot();
    enemy.shoot();
    // player.ammo = 89;
    player.shoot();
    player.shoot();
    enemy.shoot();

    // Polymorphism
    const cate = new cat();
    const doge = new dog();
    animalSound(cate);
    animalSound(doge);
  }
}
