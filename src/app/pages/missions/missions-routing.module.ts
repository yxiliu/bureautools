import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagerComponent} from "./manager/manager.component";
import {EditComponent} from "./edit/edit.component";
import { ProgressComponent} from "./progress/progress.component";
const routes: Routes = [
  {path:'',component:ManagerComponent},
  {path:"progress",component:ProgressComponent},
  {path:"edit",component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule { }
