import { ValidatorFn } from '@angular/forms';

export type FormItem = {
    formControlName: string;
    placeholder: string;
    validators: ValidatorFn[];
};
