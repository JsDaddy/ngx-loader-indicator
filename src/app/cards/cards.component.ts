import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HighlightModule } from 'ngx-highlightjs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';
import { ICard } from './cards.interface';
import { TrackByService } from '@libraries/track-by/track-by.service';
import { ScrollService } from '@open-source/scroll/scroll.service';
import { ColorPipe } from '@open-source/color/color.pipe';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { CustomLoaderComponent } from '../custom-loader/custom-loader.component';
import { FormComponent } from '../shared/form/form.component';
import { CardType } from './cards.enum';
import { InputComponent } from '@libraries/input/input.component';
import { OpenSourcePath } from '@open-source/path/open-source.path';

@Component({
    selector: 'jsdaddy-open-source-cards',
    standalone: true,
    imports: [
        CommonModule,
        HighlightModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        NgxLoaderIndicatorDirective,
        ColorPipe,
        NgOptimizedImage,
        AssetPipe,
        CustomLoaderComponent,
        FormComponent,
        InputComponent,
    ],
    providers: [ScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements AfterViewInit {
    @Input() public cardDocs!: ICard[];

    @ViewChildren('cards') public cards!: QueryList<ElementRef>;

    public readonly activeCardId$: Observable<number> = inject(ScrollService).activeCard$;
    public readonly openSourcePath = OpenSourcePath.OPEN_SOURCE;
    public readonly trackByPath = inject(TrackByService).trackBy('id');
    public readonly cardTypeInput: CardType = CardType.INPUT;
    public readonly cardTypeLoader: CardType = CardType.LOADER;
    private readonly scrollService = inject(ScrollService);

    public ngAfterViewInit(): void {
        this.scrollService.onScroll(this.cards);
    }
}
