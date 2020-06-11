import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BureauComponent } from './bureau.component';
import { BureashowComponent } from './bureashow/bureashow.component'
import { BureaueditComponent } from './bureauedit/bureauedit.component'

const routes: Routes = [
  {
    path: '', component: BureauComponent,
    children: [
      { path: 'edit', component: BureaueditComponent },
      { path: 'show', component: BureashowComponent },
      { path: '**', redirectTo:'edit' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BureauRoutingModule { }
