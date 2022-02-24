import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/Shared.Module';
import {CoreModule} from '@core/core.module';
import { IdcAnalyseComponent } from './idc-analyse/idc-analyse.component';
import { CustomAnalyseComponent } from './custom-analyse/custom-analyse.component';
import { IpRecordComponent } from './ip-record/ip-record.component';
import { TencentComponent } from './tencent/tencent.component';
import { CdnAnalyseComponent } from './cdn-analyse/cdn-analyse.component';
import { DnsSearchComponent } from './dns-search/dns-search.component';
import {ApplicationTabComponent} from '@routes/idc-netflow/application/application.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'idc-analyse', pathMatch: 'full'
  },
  {
    path: 'idc-analyse', component: IdcAnalyseComponent,
    data: {
      reload: true,
      hash: 'idc-llfx'
    }
  },
  {
    path: 'custom-analyse', component: CustomAnalyseComponent,
    data: {
      reload: true,
      hash: 'idc-yhfx'
    }
  },
  {
    path: 'ip-record', component: IpRecordComponent,
    data: {
      reload: true,
      hash: 'idc-bajc'
    }
  },
  {
    path: 'tencent', component: TencentComponent,
    data: {
      reload: true,
      hash: 'idc-txvip'
    }
  },
  {
    path: 'cdn-analyse', component: CdnAnalyseComponent,
    data: {
      reload: true,
      hash: 'idc-cdn'
    }
  },
  {
    path: 'dns-search', component: DnsSearchComponent,
    data: {
      reload: true,
      hash: 'idc-dns'
    }
  }
];

@NgModule({
  declarations: [IdcAnalyseComponent, CustomAnalyseComponent, IpRecordComponent, TencentComponent, CdnAnalyseComponent, DnsSearchComponent, ApplicationTabComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class IdcNetflowModule { }
