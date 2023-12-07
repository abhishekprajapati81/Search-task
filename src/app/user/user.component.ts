import { Component, OnInit } from '@angular/core';

export interface User {
  name: string;
  email: string;
  phone: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // searchTerm: string = '';
  // userExists: boolean = false;
  // filteredUsers: User[] = [];
  // users!: User[];
  // initialUsers = [
  //   { name: 'abhi', email: 'abhi@gmail.com', phone: 8128583430 },
  //   { name: 'abhi', email: 'abhi@gmail.com', phone: 8128583430 },
  //   { name: 'john', email: 'john@example.com', phone: 9876543210 },
  //   { name: 'emma', email: 'emma@outlook.com', phone: 7451236980 },
  //   { name: 'sara', email: 'sara@yahoo.com', phone: 6301592648 },
  //   { name: 'mike', email: 'mike@mail.com', phone: 5124678901 },
  // ];

  // additionalUsers = [
  //   { name: 'kush', email: 'emma@outlook.com', phone: 7451236980 },
  //   { name: 'saraaa', email: 'sara@yahoo.com', phone: 6301592648 },
  //   { name: 'mikeeeeee', email: 'mike@mail.com', phone: 5124678901 },
  // ];

  // // using concat method

  ngOnInit(): void {
    //   // const maxUsers = 5
    //   // for (let i = 0; i < maxUsers; i++) {
    //   //   const newUsers = {
    //   //     name: `A${i + 1}`,
    //   //     email: `a${i + 1}@gmail.com`,
    //   //     phone: 123456789 + i,
    //   //   };
    //   //   this.initialUsers.push(newUsers);
    //   // }
    //   // console.log(this.initialUsers, 'autoincremet');
    //   const maxUsers = 5;
    //   Array.from({ length: maxUsers }).forEach((_, i) => {
    //     const newUser = {
    //       name: `A${i + 1}`,
    //       email: `a${i + 1}@gmail.com`,
    //       phone: 123456789 + i,
    //     };
    //     this.initialUsers.push(newUser);
    //   });
    //   console.log(this.initialUsers);
    //   // this.users = this.initialUsers.concat(this.additionalUsers).slice(0, 5);
    //   // console.log(this.users, 'concat method');
    //   // using join method
    //   const usersjoin = this.initialUsers
    //     .map((user) => `${user.name} ? ${user.email} ? ${user.phone}`)
    //     .join('--');
    //   console.log('result', usersjoin);
    //   // push method
    //   // const newUser: User = {
    //   //   name: 'raju',
    //   //   email: 'raju@.com',
    //   //   phone: 741852963,
    //   // };
    //   // this.users.push(newUser);
    //   // console.log(this.users, 'add new user');
    //   console.log(this.additionalUsers.shift());
    //   // pop method
    //   // this.additionalUsers.pop();
    //   // console.log(this.additionalUsers, 'pop user');
    //   // reverse
    //   // this.initialUsers.reverse();
    //   // console.log(this.initialUsers, 'reverse user');
    //   // using splice
    //   // const indexToRemove = this.users.findIndex((user) => user.name === 'emma');
    //   // if (indexToRemove !== -1) {
    //   //   this.users.splice(indexToRemove, 1);
    //   //   console.log(this.users);
    //   // }
    //   // remove duplicate array uisng filter
    //   const uniqueUsers = this.initialUsers.filter((user, index, self) => {
    //     const key = user.name + '-' + user.email;
    //     return (
    //       index ===
    //       self.findIndex((u) => {
    //         return u.name === user.name && u.email === user.email;
    //       })
    //     );
    //   });
    //   console.log(uniqueUsers, 'remove duplicat user');
    //   // check phone number who greater than 9
    //   const filteredUsersPhone = this.initialUsers.filter(
    //     (user) => user.phone > 9000000000
    //   );
    //   console.log('Filtered Users by Phone:', filteredUsersPhone);
    //   // check who name is abhi
    //   // const filteredUsersByName = this.initialUsers.filter(
    //   //   (user) => user.name === 'abhi'
    //   // );
    //   // console.log('Filtered Users by Name:', filteredUsersByName);
    //   // check who email start with a
    //   const filteredEmails = this.initialUsers
    //     .filter((user) => user.name.toLowerCase().startsWith('m'))
    //     .map((user) => user.email);
    //   console.log(filteredEmails);
    //   // dislay user using foreach
    //   this.initialUsers.forEach((user) => {
    //     console.log(`name: ${user.name} email:${user.email} phone:${user.phone}`);
    //   });
    //   // change user email using forEach
    //   this.initialUsers.forEach((user) => {
    //     if (user.name === 'abhi') user.email = 'for@gmail.com';
    //   });
    //   const newuser: any[] = [];
    //   this.initialUsers.forEach((users) => {
    //     if (users.phone.toString().startsWith('812')) {
    //       newuser.push(users);
    //     }
    //   });
    //   console.log(newuser);
    //   this.users = this.initialUsers.slice();
    // }
    // user exist or not
    // checkIfExists() {
    //   this.userExists = this.initialUsers.some((user) =>
    //     Object.values(user).some(
    //       (value) =>
    //         typeof value === 'string' &&
    //         value.toLowerCase().includes(this.searchTerm.toLowerCase())
    //     )
    //   );
    // }
    // editUser(user: any) {
    //   user.editMode = true;
    // }
    // updateUser(user: any) {
    //   user.editMode = false;
    // }
  }
}
