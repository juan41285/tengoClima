import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClimaPage } from './clima';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ClimaPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ClimaPage),
  ],
})
export class ClimaPageModule {}
