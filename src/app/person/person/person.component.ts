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
  startWith,
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
  previousSearch = '';
  constructor(private userService: UsersService) {
    this.users$ = this.userService.all();
  }

  ngOnInit() {
    this.searchFrom.valueChanges
      .pipe(startWith(''), debounceTime(1300), distinctUntilChanged())
      .subscribe((searchString) => {
        if (searchString && searchString.length >= 3) {
          this.filteredUsers$ = this.users$.pipe(
            map((users) =>
              users.filter(
                (user) =>
                  user.firstName
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                  user.lastName
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
              )
            )
          );
        } else if (!searchString || searchString.length < 3) {
          this.filteredUsers$ = this.users$;
        }
      });
  }
}
