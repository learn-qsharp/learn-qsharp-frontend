import React, {useEffect, useState} from "react";
import PageTitle from "../components/PageTitle";
import PageCard from "../components/PageCard";
import {ShimmeredDetailsList, Link} from "@fluentui/react"
import {getTheme, mergeStyles} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"
import Page from "../components/Page";

export default function Tutorials() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const theme = getTheme();

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
            minWidth: 150,
            maxWidth: 200,

            onRender: (item) => {
                return <Link href={"/tutorials/" + item.id}>{item.title}</Link>;
            },
        },
        {
            key: 'description',
            name: 'Description',
            fieldName: 'description',
            minWidth: 400,
            isMultiline: true,
        },
        {key: 'tags', name: 'Tags', fieldName: 'tags', minWidth: 150},
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
                        description: tutorial.description,
                        tags: tutorial.tags.join(', '),
                        difficulty: tutorial.difficulty,
                    }

                    setItems(items => [...items, item])
                })
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <Page titleSuffix="Tutorials">
            <PageTitle>Tutorials</PageTitle>
            <PageCard>
                <ShimmeredDetailsList columns={columns} items={items} selectionMode={SelectionMode.none}
                                      enableShimmer={isLoading}/>
            </PageCard>
        </Page>
    );
}