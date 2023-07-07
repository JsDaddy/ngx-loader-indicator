import { ValidatorFn } from '@angular/forms';

export interface IFormItem {
    formControlName: string;
    placeholder: string;
    validators: ValidatorFn[];
}
