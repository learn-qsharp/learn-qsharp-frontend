import React from "react";
import {getTheme, mergeStyles} from "@fluentui/react";

export default function PageCard(props) {
    const theme = getTheme();

    const cardClass = mergeStyles({
        marginLeft: theme.spacing.l2,
        marginRight: theme.spacing.l2,
        boxShadow: theme.effects.elevation4,
        backgroundColor: theme.semanticColors.bodyFrameBackground
    });

    return <div className={cardClass}>{props.children}</div>;
}