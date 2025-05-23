import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { NGX_LOADER_INDICATOR_CONFIG, Config } from './ngx-loader-indicator.config';

@Directive({
    selector: '[ngxLoaderIndicator]',
    standalone: true,
})
export class NgxLoaderIndicatorDirective {
    private readonly _config = inject<Config>(NGX_LOADER_INDICATOR_CONFIG);

    private readonly _el = inject(ElementRef);

    private readonly _renderer = inject(Renderer2);

    public loaderEl!: HTMLDivElement;
    public ngxLoaderIndicator = input<boolean>(false);
    public constructor() {
        effect(() => {
            this.processValue(this.ngxLoaderIndicator());
        });
    }
    private processValue(value: boolean) {
        if (!value) {
            if (this.loaderEl instanceof HTMLDivElement) {
                this._setStyles(this.loaderEl, { display: 'none' });
            }
            return;
        }
        const { rotate, hostStyles, loaderStyles, imgStyles, img } = this._config;

        this.loaderEl = this._renderer.createElement('div') as HTMLDivElement;
        const imgEl = this._renderer.createElement('img') as HTMLImageElement;

        imgEl.animate([{ transform: 'rotate(360deg)' }, { transform: 'rotate(0deg)' }], rotate);

        this._renderer.appendChild(this._el.nativeElement, this.loaderEl);
        this._renderer.appendChild(this.loaderEl, imgEl);

        this._setStyles(this._el.nativeElement as HTMLElement, hostStyles);
        this._setStyles(this.loaderEl, loaderStyles);
        this._setStyles(imgEl, imgStyles);

        if (!img) {
            return;
        }
        this._renderer.setAttribute(imgEl, 'src', img);
    }
    private _setStyles(element: HTMLElement, styles: Record<string, string> | undefined): void {
        if (!styles) {
            return;
        }
        Object.keys(styles).forEach((key: string) => {
            this._renderer.setStyle(element, key, styles[key]);
        });
    }
}
