import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomLibModule } from '../../../ui-library/projects/custom-lib/src/lib/custom-lib.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    CustomLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
