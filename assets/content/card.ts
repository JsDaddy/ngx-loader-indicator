import { ICard } from '../../app/cards/cards.interface';

export const Card: ICard[] = [
    {
        header: 'Authentication process with default configuration',
        code: ` <form (ngSubmit)="login(auth.value)" [formGroup]="authForm" [loader]="isLoading">
                    .....    
                </form> `,
        id: 1,
        anchor: 'authentication',
        cardType: true,
    },
    {
        header: 'Loader with custom configuration',
        code: `<div [loader]="true">
                  ...
               </div>`,
        customCodeProvider: `@Component({
....    
providers: [
        {
            provide: config,
            useValue: {
                img: 'https://avatars2.githubusercontent.com/u/32452610?s=200&v=4',
                loaderStyles: {
                    background: 'rgba(255, 255, 255, 0.8)',
                },
                imgStyles: {
                    width: '100px',
                    background: 'yellow',
                },
                rotate: {
                    duration: 5000,
                },
            },
        },
    ],
}) `,
        id: 2,
        anchor: 'loader',
        cardType: false,
    },
];
