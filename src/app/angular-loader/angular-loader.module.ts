import { AngularLoaderDirective } from './angular-loader.directive';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { config, INITIAL_CONFIG, initialConfig, NEW_CONFIG, optionsConfig } from './config';

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
  public static forRoot(configValue?: optionsConfig): ModuleWithProviders {
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
}


/**
 * @internal
 */
export function _configFactory
  (initConfig: optionsConfig, configValue: optionsConfig | (() => optionsConfig)): Function | optionsConfig {
  return (typeof configValue === 'function')
    ? configValue()
    : {
      ...initConfig,
      ...configValue,
      loaderStyles: { ...initConfig.loaderStyles, ...configValue.loaderStyles },
      imgStyles: { ...initConfig.imgStyles, ...configValue.imgStyles },
      rotate: { ...initConfig.rotate, ...configValue.rotate }
    };
}
