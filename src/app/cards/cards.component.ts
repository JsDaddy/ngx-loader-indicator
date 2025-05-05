import {
    Component,
    effect,
    ElementRef,
    HostBinding,
    inject,
    input,
    viewChildren,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CardItem } from './cards.type';
import { ScrollService } from '@open-source/scroll/scroll.service';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { CustomLoaderComponent } from '../custom-loader/custom-loader.component';
import { FormComponent } from '../shared/form/form.component';
import { OpenSourcePath } from '@open-source/path/open-source.path';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'jsdaddy-open-source-cards',
    standalone: true,
    imports: [NgOptimizedImage, HighlightModule, AssetPipe, CustomLoaderComponent, FormComponent],
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

    @HostBinding('class')
    public readonly hostClassname =
        'flex flex-col gap-4 p-4 bg-full-white box-border border-t border-t-black/10 py-5 pl-[22px] pr-4';

    public constructor() {
        effect(() => {
            this.scrollService.onScroll(this.cards());
        });
    }
}
