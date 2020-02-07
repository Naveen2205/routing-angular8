import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailRoutingModule } from '../list-detail-routing/list-detail-routing.module';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ListDetailRoutingModule
  ]
})
export class ListDetailModuleModule { }
