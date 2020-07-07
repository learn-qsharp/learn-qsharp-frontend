import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PageTitle from "../components/PageTitle";
import PageCard from "../components/PageCard";
import ReactMarkdown from "react-markdown";
import {getTheme, mergeStyles} from "@fluentui/react";

export default function Tutorial() {
    const {id} = useParams();

    const [tutorial, setTutorial] = useState(null);

    const theme = getTheme();

    const markdownRootClass = mergeStyles({
        display: 'inline-block',
        marginLeft: theme.spacing.m,
        marginTop: theme.spacing.s2,
        marginRight: theme.spacing.m,
        marginBottom: theme.spacing.s2,
        selectors: {
            'br,p,ul,ol,h1,h2,h3,h4,h5,h6': {
                color: theme.semanticColors.bodyText,
            },
        },
    });

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/tutorials/' + id)
            .then((response) => {
                return response.json()
            })
            .then((tutorial) => {
                setTutorial(tutorial);
            })
    }, [id]);

    return (
        <>
            {tutorial &&
            <>
                <PageTitle author={tutorial.author} subtitle={'Tutorial'}>{tutorial.title}</PageTitle>
                <PageCard>
                    <ReactMarkdown className={markdownRootClass} source={tutorial.body}/>
                </PageCard>
            </>
            }
        </>
    );
}