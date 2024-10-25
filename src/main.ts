import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { BaseHttpService } from '@libraries/base-http/base-http.service';
import { GithubStarsService } from '@libraries/github/github-stars.service';
import { DOMAIN } from '@libraries/token/token';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { provideEnvironmentNgxLoaderIndicator } from 'ngx-loader-indicator';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        GithubStarsService,
        provideHttpClient(),
        {
            provide: DOMAIN,
            useValue: [BaseHttpService],
        },
        BaseHttpService,
        provideEnvironmentNgxLoaderIndicator(),
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => import('highlight.js'),
            },
        },
    ],
    // eslint-disable-next-line no-console
}).catch((err) => console.error(err));
