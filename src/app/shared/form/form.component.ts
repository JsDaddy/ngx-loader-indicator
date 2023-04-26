import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';
import { TrackByService } from '@libraries/track-by/track-by.service';
import { InputComponent } from '@libraries/input/input.component';
import { IFormItem } from './form.interface';

@Component({
    selector: 'jsdaddy-open-source-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgxLoaderIndicatorDirective, InputComponent],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
    public isLoading = false;

    public readonly trackByPath = inject(TrackByService).trackBy('formControlName');
    public readonly loginValidators = [Validators.required];
    public readonly passwordValidators = [Validators.required, Validators.minLength(5)];

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly fb = inject(FormBuilder);

    public form = this.fb.group({
        login: [null, this.loginValidators],
        password: [null, this.passwordValidators],
    });

    public readonly formItems: IFormItem[] = [
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
