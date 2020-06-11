import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CounterdupremoverpRoutingModule } from './counterdupremoverp-routing.module';
import { CounterdupremoverpComponent } from './counterdupremoverp.component';
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

@NgModule({
  declarations: [CounterdupremoverpComponent],
  imports: [
    CommonModule,
    CounterdupremoverpRoutingModule,
    FormsModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule,
    IconsProviderModule,
    // NzLayoutModule,
    NzGridModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CounterdupremoverpModule { }
