import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Tutorial from "./pages/Tutorial";
import Problems from "./pages/Problems";
import Problem from "./pages/Problem";

export default function App() {
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