import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@ant-design/icons-angular';
import { AdrbookRoutingModule } from './adrbook-routing.module';
import { AdrbookComponent } from './adrbook.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconService } from "ng-zorro-antd/icon"
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NewadrbookComponent } from './newadrbook/newadrbook.component';
import { ExistadrbookComponent } from './existadrbook/existadrbook.component';
import { FormBuilder, FormControl } from '@angular/forms';

import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [AdrbookComponent, NewadrbookComponent, ExistadrbookComponent],
  imports: [
    CommonModule,
    AdrbookRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzTransferModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzSelectModule,
    NzListModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule.forRoot(icons)
  ], providers: [{ provide: NZ_I18N, useValue: zh_CN }, NzMessageService, NzIconService, FormBuilder, FormControl],
})
export class AdrbookModule { }
