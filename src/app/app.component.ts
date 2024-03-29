import { Component } from '@angular/core';
import { HeaderComponent } from '@open-source/header/header.component';
import { AccordionComponent } from '@open-source/accordion/accordion.component';
import { SubHeaderComponent } from '@open-source//sub-header/sub-header.component';
import { LinkPath } from '@libraries/link/link.path';
import { FooterComponent } from '@open-source/footer/footer.component';
import { IListItem } from '@open-source/accordion/content.interfaces';
import { lists } from '../assets/content/lists';
import { ICard } from './cards/cards.interface';
import { Card } from '../assets/content/card';
import { CardsComponent } from './cards/cards.component';
import { VersionToken } from '@libraries/version/version.token';
declare const VERSION: string;

@Component({
    selector: 'jsdaddy-open-source-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        HeaderComponent,
        HeaderComponent,
        AccordionComponent,
        SubHeaderComponent,
        FooterComponent,
        CardsComponent,
    ],
    providers: [{ provide: VersionToken, useValue: VERSION }],
})
export class AppComponent {
    public readonly card: ICard[] = Card;
    public readonly lists: IListItem[] = lists;
    public readonly githubMaskLink = LinkPath.NGX_LOADER;
    public readonly title = 'Ngx-Loader Indicator';
    public readonly subtitle =
        'Awesome loader for angular applications. No wrappers only you elements';
    public readonly chips = ['Website', 'Angular', 'Typescript', 'Carousel', 'Spinner'];
}
