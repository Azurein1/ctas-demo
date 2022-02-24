import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {SharedModule} from '@shared/Shared.Module';
import {RoutesRoutingModule} from './routes-routing.module';
import {IndexComponent} from './index/index.component';
import {CoreModule} from '@core/core.module';
import { NetDateCollectionComponent } from './net-date-collection/net-date-collection.component';

@NgModule({
  declarations: [
    MainComponent,
    IndexComponent,
    NetDateCollectionComponent,
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class RoutesModule {
}
