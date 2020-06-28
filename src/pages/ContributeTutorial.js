import React from 'react';
import Editor from 'rich-markdown-editor';
import {getTheme, mergeStyles} from '@fluentui/react';

export default function ContributeTutorial() {
    const theme = getTheme();

    const titleClass = mergeStyles({
        marginTop: theme.spacing.l2,
        marginLeft: theme.spacing.l2,
        marginBottom: theme.spacing.l2,
        color: theme.semanticColors.bodyText,
    }, theme.fonts.xxLarge);

    const cardClass = mergeStyles({
        padding: theme.spacing.l1,
        marginLeft: theme.spacing.l2,
        marginRight: theme.spacing.l2,
        boxShadow: theme.effects.elevation4,
        backgroundColor: theme.semanticColors.bodyFrameBackground
    });

    const editorClass = mergeStyles({
        marginLeft: theme.spacing.l2
    });

    const onChangeHandler = (value) => {
        console.log(value());
    };

    const markdownTemplate = '# Complex Arithmetic' +
        '\n' +
        'This is a tutorial designed to introduce you to complex arithmetic. This topic isn\'t particularly ' +
        'expansive, but it\'s important to understand it to be able to work' +
        'with quantum computing.' +
        '\n\n\\\n' +
        'This tutorial covers the following topics:' +
        '\n* Imaginary and complex numbers' +
        '\n* Basic complex arithmetic' +
        '\n* Complex plane' +
        '\n* Modulus operator' +
        '\n* Imaginary exponents' +
        '\n* Polar representation' +
        '\n\n\\\n' +
        '...' +
        '\n\n\\\n' +
        'Related problems: [Problem 1](), [Problem 2](), [Problem 3]()'

    return (
        <>
            <div className={titleClass}>Contribute a Tutorial</div>
            <div className={cardClass}>
                <Editor onChange={onChangeHandler} defaultValue={markdownTemplate} className={editorClass}/>
            </div>
        </>
    );
}