import React from 'react';
import {Layer, Label, FontIcon} from '@fluentui/react';
import {getTheme, mergeStyles} from '@fluentui/react';

export default function Header() {
    const theme = getTheme();

    const headerClass = mergeStyles({
        display: 'flex',
        padding: '0 20px',
        lineHeight: '50px',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.palette.white,
    });

    const iconClass = mergeStyles({
        fontSize: 30,
    });

    const labelClass = mergeStyles({
        fontWeight: 'bold',
        marginLeft: '5px'
    });

    return (
        <Layer>
            <div className={headerClass}>
                <FontIcon iconName="CompassNW" className={iconClass}/>
                <Label className={labelClass}>Learn QSharp</Label>
            </div>
        </Layer>
    );
}