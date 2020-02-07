import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list-detail/list/list.component';
import { DetailComponent } from './list-detail/detail/detail.component';


const routes: Routes = [
  { path: '', component: ListDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
