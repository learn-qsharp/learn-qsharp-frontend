import React from 'react';
import {CommandBar} from '@fluentui/react';
import {getTheme, mergeStyles} from '@fluentui/react';

export default function Header() {
    const theme = getTheme();

    const commandBarClass = mergeStyles({
        boxShadow: theme.effects.elevation8
    });

    const titleClass = {
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    }

    const items = [
        {
            href: '/',
            itemType: 2,
            key: 'learn-qsharp',
            text: 'Learn QSharp',
            buttonStyles: titleClass
        },
        {
            itemType: 1,
            key: 'divider'
        },
        {
            key: 'tutorials',
            text: 'Tutorials',
            href: '/tutorials',
            iconProps: {iconName: 'D365TalentLearn'}
        },
        {
            key: 'problems',
            text: 'Problems',
            href: '/problems',
            iconProps: {iconName: 'WaitlistConfirm'}
        },
        {
            key: 'contribute',
            text: 'Contribute',
            iconProps: {iconName: 'WavingHand'},

            subMenuProps: {
                items: [
                    {
                        text: 'Tutorial',
                        key: 'contribute-tutorial',
                        href: '/contribute-tutorial',
                        iconProps: {iconName: 'D365TalentInsight'}
                    },
                    {
                        text: 'Problem',
                        key: 'contribute-problem',
                        href: '/contribute-problem',
                        iconProps: {iconName: 'AddToShoppingList'}
                    },
                ],
            },
        }
    ];

    return (
        <CommandBar className={commandBarClass} items={items}/>
    );
}