import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import { NGX_LOADER_INDICATOR_CONFIG, IConfig } from './ngx-loader-indicator.config';

@Directive({
    selector: '[loader]',
    standalone: true,
})
export class NgxLoaderIndicatorDirective {
    private readonly _config = inject<IConfig>(NGX_LOADER_INDICATOR_CONFIG);

    private readonly _el = inject(ElementRef);

    private readonly _renderer = inject(Renderer2);

    public loaderEl!: HTMLDivElement;

    @Input()
    public set loader(value: boolean) {
        if (!value) {
            this.loaderEl ? this._setStyles(this.loaderEl, { display: 'none' }) : null;
            return;
        }
        const { rotate, hostStyles, loaderStyles, imgStyles, img } = this._config;

        this.loaderEl = this._renderer.createElement('div');
        // tslint:disable-next-line:typedef
        const imgEl = this._renderer.createElement('img');

        imgEl.animate([{ transform: 'rotate(360deg)' }, { transform: 'rotate(0deg)' }], rotate);

        this._renderer.appendChild(this._el.nativeElement, this.loaderEl);
        this._renderer.appendChild(this.loaderEl, imgEl);

        this._setStyles(this._el.nativeElement, hostStyles);
        this._setStyles(this.loaderEl, loaderStyles);
        this._setStyles(imgEl, imgStyles);

        if (!img) {
            return;
        }
        this._renderer.setAttribute(imgEl, 'src', img);
    }

    private _setStyles(element: HTMLElement, styles: { [key: string]: string } | undefined): void {
        if (!styles) {
            return;
        }
        Object.keys(styles).forEach((key: string) => {
            this._renderer.setStyle(element, key, styles[key]);
        });
    }
}
