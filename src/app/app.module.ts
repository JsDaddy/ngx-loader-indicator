import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoaderIndicatorModule } from './angular-loader/angular-loader.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
