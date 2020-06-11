import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlemanagerComponent } from './articlemanager/articlemanager.component';
import { InfomanagerComponent } from './infomanager/infomanager.component';


@NgModule({
  declarations: [ArticlemanagerComponent, InfomanagerComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
