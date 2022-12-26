import { Component } from '@angular/core';
import { NgxLoaderIndicatorDirective, provideNgxLoaderIndicator } from 'ngx-loader-indicator';

@Component({
    selector: 'ngx-loader-indicator-custom-loader',
    templateUrl: './custom-loader.component.html',
    styleUrls: ['./custom-loader.component.css'],
    standalone: true,
    imports: [NgxLoaderIndicatorDirective],
    providers: [
        provideNgxLoaderIndicator({
            img: 'https://avatars2.githubusercontent.com/u/32452610?s=200&v=4',
            loaderStyles: {
                background: 'rgba(255, 255, 255, 0.8)',
            },
            imgStyles: {
                width: '50px',
                background: 'yellow',
            },
            rotate: {
                duration: 5000,
            },
        }),
    ],
})
export class CustomLoaderComponent {}
