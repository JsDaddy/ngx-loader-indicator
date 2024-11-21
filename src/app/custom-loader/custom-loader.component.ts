import { Component } from '@angular/core';
import { NgxLoaderIndicatorDirective, provideNgxLoaderIndicator } from 'ngx-loader-indicator';

@Component({
    selector: 'jsdaddy-open-source-loader-indicator-custom-loader',
    templateUrl: './custom-loader.component.html',
    styleUrls: ['./custom-loader.component.css'],
    standalone: true,
    imports: [NgxLoaderIndicatorDirective],
    providers: [
        provideNgxLoaderIndicator({
            img: 'assets/images/shared/rotate-logo.svg',
            loaderStyles: {
                background: '',
                position: 'relative',
                bottom: '60px',
                'z-index': '0',
            },
            imgStyles: {
                width: '100px',
            },
            rotate: {
                duration: 5000,
            },
        }),
    ],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CustomLoaderComponent {}
