export class Action {
  private ammo = 10;
  private readonly name: string;
  //   ammo = 10;
  //   name: string;

  constructor(name: string) {
    this.name = name;
  }

  shoot() {
    this.ammo = this.ammo - 1;
    console.log(`${this.name} is shooting ${this.ammo} ammo`);
  }
}

export class player extends Action {}

export class enemy extends Action {}
