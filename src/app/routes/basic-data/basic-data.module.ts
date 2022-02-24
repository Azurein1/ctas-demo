import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpStoreComponent } from './ip-store/ip-store.component';
import { IcpStoreComponent } from './icp-store/icp-store.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "@shared/Shared.Module";

const routes: Routes = [
  {
    path: '', redirectTo: 'ip-store', pathMatch: 'full'
  },
  {
    path: 'ip-store', component: IpStoreComponent,
    data: {
      reload: true,
      hash: 'ip'
    }
  },
  {
    path: 'icp-store', component: IcpStoreComponent,
    data: {
      reload: true,
      hash: 'icp'
    }
  },
];

@NgModule({
  declarations: [IpStoreComponent, IcpStoreComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class BasicDataModule { }
