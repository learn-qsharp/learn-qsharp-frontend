import React, {useEffect, useState} from "react";
import PageTitle from "../components/PageTitle";
import PageCard from "../components/PageCard";
import {ShimmeredDetailsList, Link} from "@fluentui/react"
import {getTheme, mergeStyles} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"

export default function Problems() {
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
            key: 'name',
            name: 'Name',
            fieldName: 'name',
            isRowHeader: true,
            minWidth: 150,
            maxWidth: 200,

            onRender: (item) => {
                return <Link href={"/problems/" + item.id}>{item.name}</Link>;
            },
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
        fetch(process.env.REACT_APP_API_URL + '/problems')
            .then((response) => {
                return response.json()
            })
            .then((problems) => {
                problems.forEach((problem, i) => {
                    const item = {
                        key: problem.id,
                        id: problem.id,
                        name: problem.name,
                        tags: problem.tags.join(', '),
                        difficulty: problem.difficulty,
                    }

                    setItems(items => [...items, item])
                })
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            <PageTitle>Problems</PageTitle>
            <PageCard>
                <ShimmeredDetailsList columns={columns} items={items} selectionMode={SelectionMode.none}
                                      enableShimmer={isLoading}/>
            </PageCard>
        </>
    );
}