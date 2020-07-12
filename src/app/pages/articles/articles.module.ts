import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlemanagerComponent } from './articlemanager/articlemanager.component';
import { InfomanagerComponent } from './infomanager/infomanager.component';
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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [ArticlemanagerComponent, InfomanagerComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    NzTableModule,
    NzDropDownModule,
    NzListModule,
    NzTransferModule,
    NzModalModule,
    NzDescriptionsModule,
    NzSelectModule,
    NzUploadModule,
    NzSkeletonModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzNotificationModule,
    NzMenuModule,
    NzLayoutModule,
    NzInputModule
    
  ],providers:[NzMessageService,]
})
export class ArticlesModule { }
