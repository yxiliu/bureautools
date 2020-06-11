import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterdupremoverpComponent } from './counterdupremoverp.component';

const routes: Routes = [
  {path:'',component:CounterdupremoverpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterdupremoverpRoutingModule { }


