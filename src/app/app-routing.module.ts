import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list-detail/list/list.component';
import { DetailComponent } from './list-detail/detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'console', pathMatch: 'full'},
  { 
    path: 'console',     
    loadChildren: ()=>import('./list-detail/list-detail-module/list-detail-module.module').then(m=>m.ListDetailModuleModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
