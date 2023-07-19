import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { InputModule } from 'src/app/atoms/input/input.module';
import { SearchBoxComponent } from './search-box.component';

const components: Type<any>[] = [SearchBoxComponent];

@NgModule({
  imports: [CommonModule, InputModule, ButtonModule],
  declarations: [components],
  exports: [components],
})
export class SearchBoxModule {}
