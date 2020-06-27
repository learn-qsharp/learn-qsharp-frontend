import React from 'react';
import {Layer, CommandBar} from '@fluentui/react';
import {getTheme, mergeStyles} from "@fluentui/react";

export default function Header() {
    const theme = getTheme();

    const titleClass = mergeStyles({
        marginTop: 'auto',
        marginRight: '15px',
        marginBottom: 'auto',
        color: theme.palette.neutralPrimary
    })

    const items = [
        {
            key: 'title',
            onRender: () => <h2 className={titleClass}>Learn QSharp</h2>
        },
        {
            key: 'tutorials',
            text: 'Tutorials',
            iconProps: {iconName: 'D365TalentLearn'},
        },
        {
            key: 'problems',
            text: 'Problems',
            iconProps: {iconName: 'WaitlistConfirm'},
        }
    ];

    return (
        <Layer>
            <CommandBar items={items}/>
        </Layer>
    );
}