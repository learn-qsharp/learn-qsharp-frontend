import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageCard from "../components/PageCard";
import ReactMarkdown from "react-markdown";
import {getTheme, mergeStyles} from "@fluentui/react";
import Page from "../components/Page";

export default function Problem() {
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
        fetch(process.env.REACT_APP_API_URL + '/problems/' + id)
            .then((response) => {
                return response.json()
            })
            .then((tutorial) => {
                setTutorial(tutorial);
            })
    }, [id]);

    return (
        <Page titleSuffix={'Problem ' + id}>
            {tutorial &&
            <>
                <PageHeader credits={tutorial.credits} subtitle={'Problem'}>{tutorial.name}</PageHeader>
                <PageCard>
                    <ReactMarkdown className={markdownRootClass} source={tutorial.body}/>
                </PageCard>
            </>
            }
        </Page>
    );
}