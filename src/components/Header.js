import React from 'react';
import {Layer, CommandBar} from '@fluentui/react';
import {getTheme, mergeStyles} from "@fluentui/react";

export default function Header() {
    const theme = getTheme();

    const tittleClass = mergeStyles({
        marginTop: 'auto',
        marginBottom: 'auto',
        color: theme.palette.neutralPrimary
    })

    const items = [
        {
            onRender: () => <h2 className={tittleClass}>Learn QSharp</h2>
        },
        {
            key: '-'
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