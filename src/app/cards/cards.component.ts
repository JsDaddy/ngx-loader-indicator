import { Component, effect, ElementRef, inject, input, viewChildren } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';
import { CardItem } from './cards.type';
import { ScrollService } from '@open-source/scroll/scroll.service';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { CustomLoaderComponent } from '../custom-loader/custom-loader.component';
import { FormComponent } from '../shared/form/form.component';
import { InputComponent } from '@libraries/input/input.component';
import { OpenSourcePath } from '@open-source/path/open-source.path';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'jsdaddy-open-source-cards',
    standalone: true,
    imports: [
        NgOptimizedImage,
        HighlightModule,
        NgxLoaderIndicatorDirective,
        AssetPipe,
        CustomLoaderComponent,
        FormComponent,
        InputComponent,
    ],
    providers: [ScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
    public cardDocs = input<CardItem[]>();

    public cards = viewChildren<string, ElementRef<HTMLElement>>('cards', {
        read: ElementRef,
    });

    public readonly openSourceCardsPath = OpenSourcePath.CARDS;

    private readonly scrollService = inject(ScrollService);
    public readonly activeCardId = toSignal(this.scrollService.activeCard$);

    public constructor() {
        effect(() => {
            this.scrollService.onScroll(this.cards());
        });
    }
}
