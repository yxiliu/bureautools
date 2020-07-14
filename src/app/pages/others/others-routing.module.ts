import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordGeneratorComponent } from "./password-generator/password-generator.component"
import {CounterdupremoverpComponent} from "./counterdupremoverp/counterdupremoverp.component"

const routes: Routes = [
  {
    path: 'password', component: PasswordGeneratorComponent,
  },
  {
    path: 'counter', component: CounterdupremoverpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
