import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdrbookComponent } from "./adrbook.component"
import { NewadrbookComponent } from "./newadrbook/newadrbook.component"
import { ExistadrbookComponent } from "./existadrbook/existadrbook.component"
const routes: Routes = [
  {path:'',component:AdrbookComponent, children:
    [
      {path:'new', component:NewadrbookComponent },
      {path:'show', component:ExistadrbookComponent },
      {path:'**', redirectTo:'new'}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdrbookRoutingModule { }
