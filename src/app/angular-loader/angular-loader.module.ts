import { AngularLoaderDirective } from './angular-loader.directive';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { config, IConfig, INITIAL_CONFIG, initialConfig, NEW_CONFIG, optionsConfig } from './config';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AngularLoaderDirective,
  ],
  exports: [
    AngularLoaderDirective,
  ]
})
export class NgxLoaderIndicatorModule {
  public static forRoot(configValue?: optionsConfig): ModuleWithProviders<NgxLoaderIndicatorModule> {
    return {
      ngModule: NgxLoaderIndicatorModule,
      providers: [
        {
          provide: NEW_CONFIG,
          useValue: configValue
        },
        {
          provide: INITIAL_CONFIG,
          useValue: initialConfig
        },
        {
          provide: config,
          useFactory: _configFactory,
          deps: [INITIAL_CONFIG, NEW_CONFIG]
        },
      ]
    };
  }
  public static forChild(_configValue?: optionsConfig): ModuleWithProviders<NgxLoaderIndicatorModule> {
    return {
        ngModule: NgxLoaderIndicatorModule
    };
}
}


/**
 * @internal
 */
export function _configFactory
  (initConfig: optionsConfig, configValue: optionsConfig): Function | optionsConfig {
  const loaderStyles: IConfig['loaderStyles'] = configValue ? configValue.loaderStyles : null;
  const imgStyles: IConfig['imgStyles'] = configValue ? configValue.imgStyles : null;
  const rotate: IConfig['rotate'] = configValue ? configValue.rotate : null;

  return {
    ...initConfig,
    ...configValue,
    loaderStyles: { ...initConfig.loaderStyles, ...loaderStyles },
    imgStyles: { ...initConfig.imgStyles, ...imgStyles },
    rotate: { ...initConfig.rotate, ...rotate }
  };
}
