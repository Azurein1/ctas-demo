import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/Shared.Module';
import {CoreModule} from '@core/core.module';
import { GraphicalComponent } from '@routes/multidimensional/graphical/graphical.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'graphical', pathMatch: 'full'
  },
  {
    path: 'graphical', component: GraphicalComponent,
    data: {
      reload: true,
      hash: 'dwd-txhsjk'
    }
  },
  {
    path: 'search', component: SearchComponent,
    data: {
      reload: true,
      hash: 'dwd-cx'
    }
  },
];

@NgModule({
  declarations: [GraphicalComponent, SearchComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class MultidimensionalModule { }
