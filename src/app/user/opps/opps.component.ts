class Bus {
  make: string;
  year: number;
  model: string;

  constructor(make: string, year: number, model: string) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`make:${this.make} ${this.model} Year: ${this.year}`);
  }
}
// Qns2
class Suv extends Bus {
  offroad: boolean;

  constructor(make: string, year: number, model: string, offroad: boolean) {
    super(make, year, model);
    this.offroad = offroad;
  }

  toggle() {
    if (this.offroad) {
      console.log(`${this.make} ${this.model} road mode on`);
    } else this.offroad;
    {
      console.log(`${this.make} ${this.model} road mode off`);
    }
  }
}
// qns3
class Student {
  name: string;
  classname: string;
  rollnumber?: number;

  constructor(name: string, classname: string, rollnumber: number) {
    this.name = name;
    this.classname = classname;
    this.rollnumber = rollnumber;
  }
}
// qns4
class Shape {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(color: string, redius: number) {
    super(color);

    this.radius = redius;
  }
}
// qns5
class NewestStudent {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;

    if (age > 0) {
      this.age = age;
    } else {
      this.age = 0;
      console.log('not positive');
    }
  }
}
// qns6
class Animal {
  species: string;
  name: string;

  constructor(species: string, name: string) {
    this.species = species;
    this.name = name;
  }
}
class tiger extends Animal {
  ror() {
    console.log(`${this.name}`);
  }
}
// qns7
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Employee extends Person {
  EmpId: number;
  constructor(name: string, age: number, empid: number) {
    super(name, age);
    this.EmpId = empid;
  }
}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-opps',
  templateUrl: './opps.component.html',
  styleUrls: ['./opps.component.css'],
})
export class OppsComponent implements OnInit {
  ngOnInit(): void {
    const newsBus = new Bus('st', 1029, 'A1');
    newsBus.start();
    console.log(newsBus, 'new bus');

    // qun2
    const newSuv = new Suv('Volvo', 2023, 'Forse', false);
    newSuv.toggle();

    // qun3
    const newStudent = new Student('abhi', 'bca', 45);
    console.log(newStudent.name);
    console.log(newStudent.classname);
    console.log(newStudent, 'new object');

    // qns4
    const newShap = new Shape('red');
    console.log(newShap);

    const myCircle = new Circle('Black', 7);
    console.log(myCircle);

    // quns5
    const std = new NewestStudent('kush', -1);
    console.log(std);

    // qns6
    const myTiger = new tiger('Sher', 'Tiger');
    myTiger.ror;
    console.log(myTiger);

    // qns
    const myEmp = new Employee('abhi', 45, 45);
    console.log(myEmp, 'newEmp');
  }
}
