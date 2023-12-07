import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OppsComponent } from './user/opps/opps.component';
import { OopsComponent } from './task/oops/oops.component';
import { PersonComponent } from './person/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OppsComponent,
    OopsComponent,
    PersonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
