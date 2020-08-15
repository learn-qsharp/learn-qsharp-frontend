import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {getTheme} from "@fluentui/react"
import Header from "./components/Header";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Tutorial from "./pages/Tutorial";
import Problems from "./pages/Problems";
import Problem from "./pages/Problem";

export default function App() {
    const theme = getTheme();

    useEffect(() => {
        document.body.style.backgroundColor = theme.semanticColors.bodyStandoutBackground;
    });

    return (
        <Router>
            <div>
                <Header/>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/problems/:id">
                        <Problem/>
                    </Route>
                    <Route path="/problems">
                        <Problems/>
                    </Route>
                    <Route path="/tutorials/:id">
                        <Tutorial/>
                    </Route>
                    <Route path="/tutorials">
                        <Tutorials/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}