import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';
import { InputComponent } from '@libraries/input/input.component';
import { FormItem } from './form.type';

@Component({
    selector: 'jsdaddy-open-source-form',
    standalone: true,
    imports: [ReactiveFormsModule, NgxLoaderIndicatorDirective, InputComponent],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
    public isLoading = false;

    public readonly loginValidators = [Validators.required];
    public readonly passwordValidators = [Validators.required, Validators.minLength(5)];

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly fb = inject(FormBuilder);

    public form = this.fb.group({
        login: [null, this.loginValidators],
        password: [null, this.passwordValidators],
    });

    public readonly formItems: FormItem[] = [
        {
            formControlName: 'login',
            validators: this.loginValidators,
            placeholder: 'Login',
        },
        {
            formControlName: 'password',
            validators: this.passwordValidators,
            placeholder: 'Password',
        },
    ];

    public login(): void {
        this.isLoading = true;
        of({})
            .pipe(delay(3000))
            .subscribe(() => {
                this.form.reset();
                this.isLoading = false;
                this.cdr.detectChanges();
            });
    }
}
