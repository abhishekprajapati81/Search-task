import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OppsComponent } from './user/opps/opps.component';
import { OopsComponent } from './task/oops/oops.component';

const routes: Routes = [
  {
    path: 'oops',
    component: OopsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
