import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/counter' },
  { path: 'counter', loadChildren: () => import('./pages/counterdupremoverp/counterdupremoverp.module').then(m => m.CounterdupremoverpModule) },
  { path: 'bureau', loadChildren: () => import('./pages/bureau/bureau.module').then(m => m.BureauModule) },
  { path: 'article', loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'adrbook', loadChildren: () => import('./pages/adrbook/adrbook.module').then(m => m.AdrbookModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
