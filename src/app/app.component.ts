import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { delay } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
import { MatButtonModule } from '@angular/material/button';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';

@Component({
    selector: 'ngx-loader-indicator-demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        HighlightModule,
        HeaderComponent,
        NgxLoaderIndicatorDirective,
        CustomLoaderComponent,
    ],
})
export class AppComponent implements OnInit {
    public auth!: UntypedFormGroup;
    public isLoading = false;

    public baseCode = ` <form (ngSubmit)="login(auth.value)" [formGroup]="authForm" [loader]="isLoading">
.....    
</form>    
    `;

    public customProviderCode = `@Component({
....    
providers: [
        {
            provide: config,
            useValue: {
                img: 'https://avatars2.githubusercontent.com/u/32452610?s=200&v=4',
                loaderStyles: {
                    background: 'rgba(255, 255, 255, 0.8)',
                },
                imgStyles: {
                    width: '100px',
                    background: 'yellow',
                },
                rotate: {
                    duration: 5000,
                },
            },
        },
    ],
})   
    `;

    public customHtmlCode = `<div [loader]="true">
...
</div>    
    `;

    public constructor(private _fb: UntypedFormBuilder) {}

    public ngOnInit(): void {
        this.auth = this._fb.group({
            email: ['', Validators.required],
            password: ['', [Validators.required]],
        });
    }

    public login(): void {
        this.isLoading = true;
        of({})
            .pipe(delay(3000))
            .subscribe(() => {
                this.auth.reset();
                this.isLoading = false;
            });
    }
}
