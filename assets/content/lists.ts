import { IListItem } from '@open-source/accordion/content.interfaces';

export const lists: IListItem[] = [
    {
        header: 'Configuration',
        id: 1,
        defaultSvg: 'options',
        activeSvg: 'options-active',
        whiteChevron: 'white-chevron-down',
        yellowChevron: 'yellow-chevron-down',
        text: [
            {
                content: 'Authentication process',
                id: 1,
                scrollTo: 'authentication',
            },
            {
                content: 'Loader',
                id: 2,
                scrollTo: 'loader',
            },
        ],
    },
];
