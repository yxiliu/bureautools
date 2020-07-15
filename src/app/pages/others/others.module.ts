import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconService } from "ng-zorro-antd/icon"
import { IconDefinition } from '@ant-design/icons-angular';
import { CounterdupremoverpComponent } from './counterdupremoverp/counterdupremoverp.component';
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


import { OthersRoutingModule } from './others-routing.module';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';


@NgModule({
  declarations: [PasswordGeneratorComponent,CounterdupremoverpComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    CommonModule,
    FormsModule,
    NzCheckboxModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule,
    IconsProviderModule,
    NzIconModule.forRoot(icons),
    // NzLayoutModule,
    NzGridModule,
    NzIconModule
  ],providers: [{ provide: NZ_I18N, useValue: zh_CN },NzIconService],
})
export class OthersModule { }
