import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  all(): Observable<User[]> {
    return of([
      { firstName: 'Klaus', lastName: 'Prajapati' },
      { firstName: 'Harmut', lastName: 'Sharma' },
      { firstName: 'Peter', lastName: 'Schneider' },
      { firstName: 'Kristin', lastName: 'Kluge' },
      { firstName: 'Markus', lastName: 'Bohm' },
      { firstName: 'Ines', lastName: 'Markschat' },
    ]).pipe(tap(() => console.log('api call - all')));
  }
}
