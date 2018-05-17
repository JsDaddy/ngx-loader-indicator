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
      loaderStyles: {
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'top': '0',
        'bottom': '0',
        'background': 'rgba(255, 255, 255, 0.9)',
        'z-index': '50',
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
