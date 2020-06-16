import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BureauRoutingModule } from './bureau-routing.module';
import { BureauComponent } from './bureau.component';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BureaueditComponent } from './bureauedit/bureauedit.component';
import { BureashowComponent } from './bureashow/bureashow.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@NgModule({
  declarations: [BureauComponent,  BureaueditComponent, BureashowComponent],
  imports: [
    CommonModule,
    BureauRoutingModule,
    NzTransferModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    NzListModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },NzMessageService],
})
export class BureauModule { }