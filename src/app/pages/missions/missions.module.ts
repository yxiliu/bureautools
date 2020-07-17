import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionsRoutingModule } from './missions-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { EditComponent } from './edit/edit.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [ManagerComponent, EditComponent, ProgressComponent],
  imports: [
    CommonModule,
    MissionsRoutingModule
  ]
})
export class MissionsModule { }
