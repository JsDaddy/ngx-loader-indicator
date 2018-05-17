import { InjectionToken } from '@angular/core';

export interface IStyles { [key: string]: string; }
export interface IConfig {
  img: string;
  loaderStyles: IStyles;
  imgStyles: IStyles;
  hostStyles: IStyles;
}

export type optionsConfig = {
  [P in keyof IConfig]?: IConfig[P]
};

export const config: InjectionToken<string> = new InjectionToken('config');
export const NEW_CONFIG: InjectionToken<string> = new InjectionToken('NEW_CONFIG');
export const INITIAL_CONFIG: InjectionToken<IConfig> = new InjectionToken('INITIAL_CONFIG');

export const initialConfig: IConfig = {
  img: '/assets/images/spinner.svg',
  loaderStyles: {
    'position': 'absolute',
    'left': '0',
    'right': '0',
    'top': '0',
    'bottom': '0',
    'background': 'rgba(255, 255, 255, 0.8)',
    'z-index': '50',
  },
  imgStyles: {
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'max-width': '20px',
    'max-height': '20px',
  },
  hostStyles: {
    'position': 'relative'
  }
};
