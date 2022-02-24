import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/Shared.Module';
import {CoreModule} from '@core/core.module';
import {ShellGeneratorComponent} from '@routes/shell-visualization/shell-generator/shell-generator.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'shell-generator', pathMatch: 'full'
  },
  {
    path: 'shell-generator', component: ShellGeneratorComponent,
    data: {
      reload: true,
      hash: 'shell-jbsc'
    }
  }
];

@NgModule({
  declarations: [ShellGeneratorComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class ShellVisualizationModule { }
