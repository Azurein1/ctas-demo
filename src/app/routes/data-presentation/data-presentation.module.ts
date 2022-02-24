import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataComponent } from './app-data/app-data.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/Shared.Module';
import { CoreModule } from '@core/core.module';
import { DnsDataComponent } from './dns-data/dns-data.component';
import { CommunicationProtocolDataComponent } from './communication-protocol-data/communication-protocol-data.component';
import { CdnIdcCustomComponent } from '@routes/data-presentation/cdn-idc-custom/cdn-idc-custom.component';
import { AllNetFlowAnalysisComponent } from './all-net-flow-analysis/all-net-flow-analysis.component';
import { DnsAnalysisComponent } from './dns-analysis/dns-analysis.component';
import { StatisticsAnalysisComponent } from './dns-analysis/statistics-analysis/statistics-analysis.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'app-data', pathMatch: 'full'
  },
  {
    path: 'app-data', component: AppDataComponent,
    data: {
      reload: true,
      hash: 'sjcx-yysj'
    }
  },
  {
    path: 'dns-data', component: DnsDataComponent,
    data: {
      reload: true,
      hash: 'sjcx-dnssj'
    }
  },
  {
    path: 'cdn-idc-custom', component: CdnIdcCustomComponent,
    data: {
      reload: true,
      hash: 'sjcx-shsj'
    }
  },
  {
    path: 'protocol-data', component: CommunicationProtocolDataComponent,
    data: {
      reload: true,
      hash: 'sjcx-txxy'
    }
  },
  {
    path: 'all-net-flow', component: AllNetFlowAnalysisComponent,
    data: {
      reload: true,
      hash: 'sjcx-qwzll'
    }
  },
  {
    path: 'dns-analysis', component: DnsAnalysisComponent,
    data: {
      reload: true,
      hash: 'sjcx-dnsfx'
    }
  },
  {
    path: 'statistics-analysis', component: StatisticsAnalysisComponent,
    data: {
      reload: true,
      hash: 'sjcx-tjfx'
    }
  }
];

@NgModule({
    declarations: [AppDataComponent, CdnIdcCustomComponent, DnsDataComponent, CommunicationProtocolDataComponent, AllNetFlowAnalysisComponent, DnsAnalysisComponent, StatisticsAnalysisComponent],
    exports: [
        AppDataComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        CoreModule
    ]
})
export class DataPresentationModule { }
