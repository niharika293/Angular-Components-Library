import { NgModule } from '@angular/core';
import { CustomLibComponent } from './custom-lib.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';



@NgModule({
  declarations: [
    CustomLibComponent,
    CustomButtonComponent
  ],
  imports: [
  ],
  exports: [
    CustomLibComponent
  ]
})
export class CustomLibModule { }
