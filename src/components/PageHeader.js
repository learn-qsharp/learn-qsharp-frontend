import React from "react";
import {getTheme, mergeStyles} from "@fluentui/react"

export default function PageHeader(props) {
    const theme = getTheme();

    const divClass = mergeStyles({
        marginTop: theme.spacing.l2,
        marginLeft: theme.spacing.l2,
        marginBottom: theme.spacing.l2,
    });

    const titleClass = mergeStyles({
        display: 'inline-block',
        marginRight: theme.spacing.m,
        color: theme.semanticColors.bodyText,
    }, theme.fonts.xxLarge);

    const authorClass = mergeStyles({
        fontStyle: 'italic',
        color: theme.semanticColors.bodySubtext,
    }, theme.fonts.small);

    const subTitleClass = mergeStyles({
        display: 'inline-block',
        color: theme.semanticColors.bodySubtext,
    }, theme.fonts.medium);

    return (
        <div className={divClass}>
            <div className={titleClass}>{props.children}</div>
            {props.subtitle &&
            <div className={subTitleClass}>{props.subtitle}</div>
            }
            {props.credits &&
            <div className={authorClass}>{props.credits}</div>
            }
        </div>
    );
}