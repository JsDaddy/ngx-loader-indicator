import { CardType } from './cards.enum';

export interface ICard {
    header: string;
    code: string;
    customCodeProvider?: string;
    cardType: CardType;
    id: number;
    anchor: string;
}
