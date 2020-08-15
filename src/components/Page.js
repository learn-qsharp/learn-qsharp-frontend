import {useEffect} from "react";
import {getTheme} from "@fluentui/react";

export default function Page(props) {
    const theme = getTheme();

    const titlePrefix = 'Learn-QSharp | ';

    useEffect(() => {
        document.title = titlePrefix + props.titleSuffix || '';
        document.body.style.backgroundColor = theme.semanticColors.bodyStandoutBackground;
    }, [props.titleSuffix, theme.semanticColors.bodyStandoutBackground]);


    return props.children;
}