import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Problems from "./pages/Problems";
import ContributeTutorial from "./pages/ContributeTutorial";
import ContributeProblem from "./pages/ContributeProblem";
import Header from "./components/Header";

export default function App() {
    return (
        <Router>
            <div>
                <Header/>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/contribute-problem">
                        <ContributeProblem/>
                    </Route>
                    <Route path="/contribute-tutorial">
                        <ContributeTutorial/>
                    </Route>
                    <Route path="/problems">
                        <Problems/>
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