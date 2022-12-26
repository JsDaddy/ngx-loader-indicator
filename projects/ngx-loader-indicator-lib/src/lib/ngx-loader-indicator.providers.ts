import { EnvironmentProviders, makeEnvironmentProviders, Provider } from '@angular/core';
import {
    NGX_LOADER_INDICATOR_CONFIG,
    IConfig,
    INITIAL_CONFIG,
    initialConfig,
    NEW_CONFIG,
    optionsConfig,
} from './ngx-loader-indicator.config';

export function _configFactory(
    initConfig: optionsConfig,
    configValue: optionsConfig
): optionsConfig {
    const loaderStyles: IConfig['loaderStyles'] | null = configValue
        ? configValue.loaderStyles
        : null;
    const imgStyles: IConfig['imgStyles'] | null = configValue ? configValue.imgStyles : null;
    const rotate: IConfig['rotate'] | null = configValue ? configValue.rotate : null;

    return {
        ...initConfig,
        ...configValue,
        loaderStyles: { ...initConfig.loaderStyles, ...loaderStyles },
        imgStyles: { ...initConfig.imgStyles, ...imgStyles },
        rotate: { ...initConfig.rotate, ...rotate },
    };
}

export function provideNgxLoaderIndicator(
    configValue?: optionsConfig | (() => optionsConfig)
): Provider[] {
    return [
        {
            provide: NEW_CONFIG,
            useValue: configValue,
        },
        {
            provide: INITIAL_CONFIG,
            useValue: initialConfig,
        },
        {
            provide: NGX_LOADER_INDICATOR_CONFIG,
            useFactory: _configFactory,
            deps: [INITIAL_CONFIG, NEW_CONFIG],
        },
    ];
}

export function provideEnvironmentNgxLoaderIndicator(
    configValue?: optionsConfig | (() => optionsConfig)
): EnvironmentProviders {
    return makeEnvironmentProviders(provideNgxLoaderIndicator(configValue));
}
