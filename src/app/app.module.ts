import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list-detail/list/list.component';
import { DetailComponent } from './list-detail/detail/detail.component';
import { ListDetailService } from './list-detail/list-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { ListDetailModuleModule } from './list-detail/list-detail-module/list-detail-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListDetailModuleModule,
    AppRoutingModule,
  ],
  providers: [ListDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
