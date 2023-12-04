import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OppsComponent } from './user/opps/opps.component';

const routes: Routes = [
  {
    path: 'oops',
    component: OppsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
