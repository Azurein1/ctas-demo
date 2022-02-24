import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {NetDateCollectionComponent} from '@routes/net-date-collection/net-date-collection.component';

const routes: Route[] = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'system',
    loadChildren: () => import('./system/system.module').then(value => value.SystemModule)
  },
  {
    path: 'net-data-collection/conf',
    component: NetDateCollectionComponent
  },
  {
    path: 'data-presentation',
    loadChildren: () => import('./data-presentation/data-presentation.module').then(value => value.DataPresentationModule)
  },
  {
    path: 'multidimensional',
    loadChildren: () => import('./multidimensional/multidimensional.module').then(value => value.MultidimensionalModule)
  },
  {
    path: 'idc-netflow',
    loadChildren: () => import('./idc-netflow/idc-netflow.module').then(value => value.IdcNetflowModule)
  },
  {
    path: 'shell-visualization',
    loadChildren: () => import('./shell-visualization/shell-visualization.module').then(value => value.ShellVisualizationModule)
  },
  {
    path: 'basic-data',
    loadChildren: () => import('./basic-data/basic-data.module').then(value => value.BasicDataModule)
  },
  {
    path: 'car-demo',
    loadChildren: () => import('./car-demo/car-demo.module').then(value => value.CarDemoModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutesRoutingModule {
}
