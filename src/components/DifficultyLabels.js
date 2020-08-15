import {getTheme, mergeStyles} from "@fluentui/react";
import React from "react";

const difficultyStyle = () => {
    const theme = getTheme();

    return {
        fontWeight: 'bold',
        borderRadius: '1020px',
        padding: '3px 6px 3px 6px',
        color: theme.palette.white,
    }
};

export function Easy() {
    const theme = getTheme();

    const easyDifficultyClass = mergeStyles({
        backgroundColor: theme.palette.green,
    }, difficultyStyle())

    return <span className={easyDifficultyClass}>Easy</span>;
}

export function Medium() {
    const theme = getTheme();

    const mediumDifficultyClass = mergeStyles({
        backgroundColor: theme.palette.orangeLighter,
    }, difficultyStyle())

    return <span className={mediumDifficultyClass}>Medium</span>;
}

export function Hard() {
    const theme = getTheme();

    const hardDifficultyClass = mergeStyles({
        backgroundColor: theme.palette.red,
    }, difficultyStyle())

    return <span className={hardDifficultyClass}>Hard</span>;
}