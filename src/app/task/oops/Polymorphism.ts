export class Animal {
  makesound() {
    console.log('Some generic sound');
  }
}

export class cat extends Animal {
  override makesound() {
    console.log('meow');
  }
}

export class dog extends Animal {
  override makesound() {
    console.log('bhou bhou');
  }
}

export function animalSound(animal: Animal) {
  animal.makesound();
}
