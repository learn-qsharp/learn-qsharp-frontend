import React, {useEffect, useState} from "react";
import PageTitle from "../components/PageTitle";
import PageCard from "../components/PageCard";
import {ShimmeredDetailsList, Link} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"
import Page from "../components/Page";
import {Easy, Hard, Medium} from "../components/DifficultyLabels";

export default function Problems() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        fetch(process.env.REACT_APP_API_URL + '/problems')
            .then((response) => {
                return response.json()
            })
            .then((problems) => {
                problems.forEach((problem) => {
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
        <Page titleSuffix="Problems">
            <PageTitle>Problems</PageTitle>
            <PageCard>
                <ShimmeredDetailsList columns={columns} items={items} selectionMode={SelectionMode.none}
                                      enableShimmer={isLoading}/>
            </PageCard>
        </Page>
    );
}