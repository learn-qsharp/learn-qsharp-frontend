import {useEffect} from "react";

export default function Page(props) {
    const titlePrefix = 'Learn-QSharp | ';

    useEffect(() => {
        document.title = titlePrefix + props.titleSuffix || '';
    }, [props.titleSuffix]);


    return props.children;
}