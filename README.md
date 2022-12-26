<a href="http://jsdaddy.io/img/logo.png">
  <h1 align="center">NGX LOADER INDICATOR</h1>
</a>

<p align="center">
  NGX LOADER INDICATOR is the best directive to have loader without wrapping your element to additional component
</p>

[![CI](https://github.com/JsDaddy/ngx-loader-indicator/actions/workflows/quality-check.yml/badge.svg?branch=develop)](https://github.com/JsDaddy/ngx-loader-indicator/actions/workflows/main.yml)
[![npm](https://img.shields.io/npm/v/ngx-loader-indicator.svg)](https://www.npmjs.com/package/ngx-loader-indicator)
[![npm downloads](https://img.shields.io/npm/dt/ngx-loader-indicator.svg)](https://npmjs.org/ngx-loader-indicator)

[![npm](https://img.shields.io/npm/dm/ngx-loader-indicator.svg)](https://www.npmjs.com/package/ngx-loader-indicator)

[![GitHub contributors](https://img.shields.io/github/contributors/JSDaddy/ngx-loader-indicator.svg?style=flat)](https://github.com/JSDaddy/ngx-loader-indicator)

[![GitHub stars](https://img.shields.io/github/stars/JSDaddy/ngx-loader-indicator.svg?label=GitHub%20Stars&style=flat)](https://github.com/JSDaddy/ngx-loader-indicator)

You can also try our NGX MASK [check](https://www.npmjs.com/package/ngx-mask) it.
You can also try our NGX COPYPASTE [check](https://www.npmjs.com/package/ngx-copypaste) it.
### You can try live  [demo](https://jsdaddy.github.io/ngx-loader-indicator/) with examples.
## Installing

```bash
$ npm install --save ngx-loader-indicator
```


## Quickstart if ngx-loader-indicator version >= 15.0.0

Pay attention this version works for angular >= 14.0.0

Configure for application with `provideEnvironmentNgxLoaderIndicator`

```typescript
bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideEnvironmentNgxLoaderIndicator(),
        (...)
    ],
}).catch((err) => console.error(err));
````

or configure for feature with `provideNgxLoaderIndicator` and import standalone directive `NgxLoaderIndicatorDirective`

```typescript
@Component({
    selector: 'my-feature',
    templateUrl: './my-feature.component.html',
    styleUrls: ['./my-feature.component.css'],
    standalone: true,
    imports: [NgxLoaderIndicatorDirective, (...)],
    providers: [
        (...)
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
export class MyFeatureComponent {}
````

## Quickstart if ngx-loader-indicator version < 15.0.0

Pay attention this version works for angular < 12.0.0

Import module in needed module.

```typescript
import {NgxLoaderIndicatorModule} from 'ngx-loader-indicator'

(...)

@NgModule({
  (...)
  imports: [
    NgxLoaderIndicatorModule.forRoot(options)
  ]
  (...)
})
```

### Usage

```html
<div [loader]="isLoading">Content</div> 
```

#### Examples

```html
<form (ngSubmit)="save(form.value)" [formGroup]="form" [loader]="isLoading">
  <h2>Login</h2>
  <input matInput type="email" placeholder="Email" #email formControlName="email">
  <input matInput type="password" placeholder="Password" #name formControlName="password">
  <button mat-button [disabled]="form.invalid">Login</button>
</form>
```

## Options
You can define your custom options


### custom img (string) and colors
```typescript
  {
    img: string,
    imgStyles: {
      width: string, // '30px'
      background: string, // 'yellow' or rgb(255, 255, 0)
    }
  }
```

### custom wrapper layout colors
```typescript
  {
    loaderStyles: {
      background: string,
    },
  }
```

### animations options for image rotation
```typescript
    rotate: {
      delay?: number;
      direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
      duration: number
      easing?: string;
      endDelay?: number;
      fill?: 'none' | 'forwards' | 'backwards' | 'both' | 'auto';
      id?: string;
      iterationStart?: number;
      iterations?: number;
    },
```


### Usage
```typescript
import {NgxLoaderIndicatorModule} from 'ngx-loader-indicator'

(...)

@NgModule({
  (...)
  imports: [
    NgxLoaderIndicatorModule.forRoot({
      img: 'https://avatars2.githubusercontent.com/u/32452610?s=200&v=4',
      loaderStyles: {
        background: 'rgba(255, 255, 255, 0.8)',
      },
      imgStyles: {
        width: '100px',
        background: 'yellow',
      },
      rotate: {
        duration: 5000
      },
    }),
  ]
  (...)
})
```
