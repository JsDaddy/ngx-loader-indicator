import { AngularLoaderDirective } from './angular-loader.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AngularLoaderDirective,
    SpinnerComponent
  ],
  entryComponents: [SpinnerComponent],
  exports: [
    AngularLoaderDirective,
  ]
})
export class AngularLoaderModule { }
