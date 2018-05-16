import { SpinnerComponent } from './spinner/spinner.component';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[loader]',
})
export class AngularLoaderDirective implements OnInit {

  @Input()
  public loader: boolean;

  // @HostBinding('style.position')
  // public position: string = 'relative';

  // @HostBinding('style.backgroundColor')
  // public color: string = 'yellow';

  // @HostBinding('class.className') variableName = true;

  // public loader;


  public constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
    private _cfr: ComponentFactoryResolver,
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  public ngOnInit(): void {


    // console.log(this._el.nativeElement.parentElement);
    // console.log(this._el.nativeElement.parentElement);

    const el: EmbeddedViewRef<any> = this._viewContainerRef.createEmbeddedView(this._templateRef);
    if (this.loader) {
      const cmpFactory: ComponentFactory<SpinnerComponent> = this._cfr.resolveComponentFactory(SpinnerComponent);
      this._viewContainerRef.createComponent(cmpFactory, 0);
      // this._renderer.appendChild()
      // this._renderer.setStyle(this._renderer)
      // this._viewContainerRef.move()

      // this._templateRef.insert()



      // this._viewContainerRef.createEmbeddedView(componentRef);
      // this._templateRef.elementRef.nativeElement.style.position = 'relative';
    }

  }

}
// opacity,  backdround color,
// img
