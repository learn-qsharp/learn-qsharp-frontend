import React from "react";
import {useParams} from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function Tutorial() {
    const {id} = useParams();

    return <PageTitle>{"Tutorial " + id}</PageTitle>;
}