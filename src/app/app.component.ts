import { of } from 'rxjs';
import { Component, HostBinding } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public auth: FormGroup;
  public isLoading: boolean = false;

  public img: string = '/assets/images/spinner.svg';

  public constructor(private _fb: FormBuilder) {}

  public ngOnInit(): void {
    this.auth = this._fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  public login(data: any): any {
    this.isLoading = true;
    return of({}).pipe(delay(3000)).subscribe(() => {
      this.auth.reset();
      this.isLoading = false;
    });
  }
}
