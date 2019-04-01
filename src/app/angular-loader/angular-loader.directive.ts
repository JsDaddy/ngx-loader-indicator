import {
  Directive,
  ElementRef,
  Inject,
  Input,
  Renderer2
} from '@angular/core';
import { config, IConfig } from './config';

@Directive({
  selector: '[loader]',
})
export class AngularLoaderDirective {
  @Input()
  public set loader(value: boolean) {
    if (!value) {
      this.loaderEl ? this._setStyles(this.loaderEl, { display: 'none' }) : null;
      return;
    }

    this.loaderEl = this._renderer.createElement('div');
    // tslint:disable-next-line:typedef
    const img = this._renderer.createElement('img');

    img.animate([
      { transform: 'rotate(360deg)' },
      { transform: 'rotate(0deg)' },
    ], this.rotateAnimaitioan);

    this._renderer.appendChild(this._el.nativeElement, this.loaderEl);
    this._renderer.appendChild(this.loaderEl, img);

    this._setStyles(this._el.nativeElement, this.hostStyles);
    this._setStyles(this.loaderEl, this.loaderStyles);
    this._setStyles(img, this.imgStyles);

    this._renderer.setAttribute(img, 'src', this.img);
  }

  public loaderEl: HTMLDivElement;
  public loaderStyles: IConfig['loaderStyles'];
  public imgStyles: IConfig['imgStyles'];
  public hostStyles: IConfig['hostStyles'];
  public img: IConfig['img'];
  public rotateAnimaitioan: IConfig['rotate'];

  public constructor(
    @Inject(config) private _config: IConfig,
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {
    this.loaderStyles = _config.loaderStyles;
    this.imgStyles = _config.imgStyles;
    this.hostStyles = _config.hostStyles;
    this.img = _config.img;
    this.rotateAnimaitioan = _config.rotate;
  }

  private _setStyles(element: HTMLElement, styles: { [key: string]: string }): void {
    Object.keys(styles).forEach((key: any) => {
      this._renderer.setStyle(element, key, styles[key]);
    });
  }
}
