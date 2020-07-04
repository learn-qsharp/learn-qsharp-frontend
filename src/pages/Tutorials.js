import React from "react";
import PageTitle from "../components/PageTitle";
import {DetailsList} from "@fluentui/react"
import {SelectionMode} from "@fluentui/react"

export default function Tutorials() {
    const columns = [
        {key: 'id', name: '#', fieldName: 'id', minWidth: 16, maxWidth: 16},
        {key: 'title', name: 'Title', fieldName: 'title'},
        {key: 'tags', name: 'Tags', fieldName: 'tags'},
        {key: 'author', name: 'Author', fieldName: 'author'},
        {key: 'difficulty', name: 'Difficulty', fieldName: 'difficulty'},
    ];

    return (
        <>
            <PageTitle>Tutorials</PageTitle>
            <DetailsList columns={columns} items={[]} selectionMode={SelectionMode.none}/>
        </>
    );
}