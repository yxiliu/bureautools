import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlemanagerComponent } from './articlemanager/articlemanager.component'
import { InfomanagerComponent } from "./infomanager/infomanager.component"
const routes: Routes = [
  { path: 'fawen', component: ArticlemanagerComponent },
  { path: 'xinxi', component: InfomanagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
