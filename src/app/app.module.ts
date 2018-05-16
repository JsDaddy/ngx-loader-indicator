import { AngularLoaderModule } from './angular-loader/angular-loader.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
