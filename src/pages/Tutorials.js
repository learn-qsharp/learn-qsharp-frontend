import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader";
import PageCard from "../components/PageCard";
import {ShimmeredDetailsList, Link} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"
import Page from "../components/Page";
import {Easy, Hard, Medium} from "../components/DifficultyLabels";

export default function Tutorials() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                        return <Easy/>;
                    case "medium":
                        return <Medium/>;
                    default:
                        return <Hard/>;
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
                tutorials.forEach((tutorial) => {
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
            <PageHeader>Tutorials</PageHeader>
            <PageCard>
                <ShimmeredDetailsList columns={columns} items={items} selectionMode={SelectionMode.none}
                                      enableShimmer={isLoading}/>
            </PageCard>
        </Page>
    );
}