import React from "react";
import {getTheme, mergeStyles} from "@fluentui/react"

export default function PageTitle(props) {
    const theme = getTheme();

    const titleClass = mergeStyles({
        marginTop: theme.spacing.l2,
        marginLeft: theme.spacing.l2,
        marginBottom: theme.spacing.l2,
        color: theme.semanticColors.bodyText,
    }, theme.fonts.xxLarge);

    return <div className={titleClass}>{props.children}</div>;
}