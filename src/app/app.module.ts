import { CustomLoaderModule } from './custom-loader/custom-loader.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoaderIndicatorModule } from './angular-loader/angular-loader.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    CustomLoaderModule,
    NgxLoaderIndicatorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
