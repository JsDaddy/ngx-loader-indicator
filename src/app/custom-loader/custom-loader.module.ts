import { NgxLoaderIndicatorModule } from './../angular-loader/angular-loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';

@NgModule({
  imports: [
    CommonModule,
    NgxLoaderIndicatorModule.forRoot({
      img: 'https://avatars2.githubusercontent.com/u/32452610?s=200&v=4',
      loaderStyles: {
        background: 'rgba(255, 255, 255, 0.8)',
      },
      imgStyles: {
        width: '100px',
        background: 'yellow',
      },
      rotate: {
        duration: 5000
      },
    }),
  ],
  declarations: [CustomLoaderComponent],
  exports: [CustomLoaderComponent]
})
export class CustomLoaderModule { }
