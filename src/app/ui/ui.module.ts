import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UiComponent } from './components/ui/ui.component';

@NgModule({
  declarations: [UiComponent],
  imports: [CommonModule],
  exports: [UiComponent],
})
export class UiModule {}
