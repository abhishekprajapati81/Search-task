export class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      console.log('invalid age');
    }
    this._age = theAge;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
