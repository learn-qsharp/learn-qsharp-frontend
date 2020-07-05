import React, {useEffect, useState} from "react";
import PageTitle from "../components/PageTitle";
import {DetailsList, Link} from "@fluentui/react"
import {getTheme, mergeStyles} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"

export default function Tutorials() {
    const [items, setItems] = useState([]);

    const theme = getTheme();

    const cardClass = mergeStyles({
        marginLeft: theme.spacing.l2,
        marginRight: theme.spacing.l2,
        boxShadow: theme.effects.elevation4,
        backgroundColor: theme.semanticColors.bodyFrameBackground
    });

    const difficultyStyle = {
        color: theme.palette.white,
        borderRadius: '1020px',
        fontWeight: 'bold',
        padding: '3px 6px 3px 6px',
    };

    const easyDifficultyClass = mergeStyles({
        backgroundColor: theme.palette.green,
    }, difficultyStyle)

    const mediumDifficultyClass = mergeStyles({
        backgroundColor: theme.palette.orangeLighter,
    }, difficultyStyle)

    const hardDifficultyClass = mergeStyles({
        backgroundColor: theme.palette.red,
    }, difficultyStyle)

    const columns = [
        {key: 'id', name: '#', fieldName: 'id', minWidth: 16, maxWidth: 16},
        {
            key: 'title',
            name: 'Title',
            fieldName: 'title',
            isRowHeader: true,

            onRender: (item) => {
                return <Link href={"/tutorials/" + item.id}>{item.title}</Link>;
            },
        },
        {key: 'tags', name: 'Tags', fieldName: 'tags', minWidth: 150},
        {key: 'author', name: 'Author', fieldName: 'author'},
        {
            key: 'difficulty',
            name: 'Difficulty',
            fieldName: 'difficulty',

            onRender: (item) => {
                switch (item.difficulty) {
                    case "easy":
                        return <span className={easyDifficultyClass}>Easy</span>;
                    case "medium":
                        return <span className={mediumDifficultyClass}>Medium</span>;
                    default:
                        return <span className={hardDifficultyClass}>Hard</span>;
                }
            },
        },
    ];

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/tutorials')
            .then((response) => {
                return response.json()
            })
            .then((tutorials) => {
                tutorials.forEach((tutorial, i) => {
                    const item = {
                        key: tutorial.id,
                        id: tutorial.id,
                        title: tutorial.title,
                        tags: tutorial.tags.join(', '),
                        author: tutorial.author,
                        difficulty: tutorial.difficulty,
                    }

                    setItems(items => [...items, item])
                })
            })
    }, []);

    return (
        <>
            <PageTitle>Tutorials</PageTitle>
            <div className={cardClass}>
                <DetailsList columns={columns} items={items} selectionMode={SelectionMode.none}/>
            </div>
        </>
    );
}