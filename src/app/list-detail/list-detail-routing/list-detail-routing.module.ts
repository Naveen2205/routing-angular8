import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';

const list_detail_routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'detail', component: DetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(list_detail_routes)],
  exports: [RouterModule]
})
export class ListDetailRoutingModule { }


