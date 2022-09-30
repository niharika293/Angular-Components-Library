import { NgModule } from '@angular/core';
import { CustomLibComponent } from './custom-lib.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MaterialModule } from 'src/material/material.module';



@NgModule({
  declarations: [
    CustomLibComponent,
    CustomButtonComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    CustomLibComponent,
    CustomButtonComponent
  ]
})
export class CustomLibModule { }
