import React, {useEffect, useState} from "react";
import PageTitle from "../components/PageTitle";
import {DetailsList} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"

export default function Tutorials() {
    const [items, setItems] = useState([]);
    // const [hasError, setHasError] = useState(false);
    // const [error, setError] = useState('');

    const columns = [
        {key: 'id', name: '#', fieldName: 'id', minWidth: 16, maxWidth: 16},
        {key: 'title', name: 'Title', fieldName: 'title'},
        {key: 'tags', name: 'Tags', fieldName: 'tags'},
        {key: 'author', name: 'Author', fieldName: 'author'},
        {key: 'difficulty', name: 'Difficulty', fieldName: 'difficulty'},
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
                        tags: tutorial.tags,
                        author: tutorial.author,
                        difficulty: tutorial.difficulty,
                    }

                    setItems(items => [...items, item])
                })
            })
        // .catch((err) => {
        // setError(err)
        // setHasError(true)
        // })
    }, [])

    return (
        <>
            <PageTitle>Tutorials</PageTitle>
            <DetailsList columns={columns} items={items} selectionMode={SelectionMode.none}/>
        </>
    );
}