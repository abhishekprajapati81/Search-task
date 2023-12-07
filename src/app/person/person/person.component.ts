import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';
import {
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
} from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  users$!: Observable<User[]>;
  filteredUsers$!: Observable<User[]>;
  searchFrom = new FormControl('', Validators.required);
  searchTerm$!: Observable<string | null>;
  temp = '';
  priviousData: any;
  // temp!: string;

  constructor(private userService: UsersService) {
    this.users$ = this.userService.all();
  }

  ngOnInit() {
    this.users$.subscribe((res) => {
      console.log(res);
    });
    this.filteredUsers$ = this.users$;
    this.searchTerm$ = this.searchFrom.valueChanges;
    this.searchTerm$.subscribe((data) => {
      console.log('', data);
    });
  }

  //   searchUser() {
  //     this.temp = this.searchFrom.value ?? '';
  //     console.log(this.temp);
  //     if (this.temp.length >= 3) {
  //       this.filteredUsers$ = this.users$.pipe(
  //         map((users) =>
  //           users.filter(
  //             (user) =>
  //               user.firstName.toLowerCase().includes(this.temp.toLowerCase()) ||
  //               user.lastName.toLowerCase().includes(this.temp.toLowerCase())
  //           )
  //         ),
  //         delay(500)
  //       );
  //     } else {
  //       this.filteredUsers$ = this.users$;
  //     }
  //   }
  // }

  searchUser() {
    const cuurentsearchString = this.searchFrom.value
      ? this.searchFrom.value.toLowerCase()
      : '';
    this.priviousData = this.users$;
    console.log('privious data', this.priviousData);

    if (
      cuurentsearchString &&
      cuurentsearchString.length >= 3 &&
      cuurentsearchString !== this.priviousData
    ) {
      this.dataLoadFunction();
    } else {
      this.filteredUsers$ = this.users$;
    }
    this.temp = cuurentsearchString;
  }

  dataLoadFunction() {
    this.filteredUsers$ = this.users$.pipe(
      map((users) =>
        users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(this.temp.toLowerCase()) ||
            user.lastName.toLowerCase().includes(this.temp.toLowerCase())
        )
      ),
      delay(1500)
    );
    console.log(this.filteredUsers$);
  }
}
