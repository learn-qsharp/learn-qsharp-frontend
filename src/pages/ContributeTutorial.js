import React from 'react';
import {getTheme, mergeStyles} from '@fluentui/react'
// import Editor from "rich-markdown-editor";

export default function ContributeTutorial() {
    const theme = getTheme();

    const titleClass = mergeStyles({
        marginTop: theme.spacing.l2,
        marginLeft: theme.spacing.l2,
        marginBottom: theme.spacing.l2,
        color: theme.semanticColors.bodyText,
    }, theme.fonts.xxLarge);

    const cardClass = mergeStyles({
        height: '200px',
        marginLeft: theme.spacing.l2,
        marginRight: theme.spacing.l2,
        boxShadow: theme.effects.elevation4,
        backgroundColor: theme.semanticColors.bodyFrameBackground
    })

    return (
        <>
            <div className={titleClass}>Contribute a Tutorial</div>
            <div className={cardClass}>
            </div>
        </>
    );
}