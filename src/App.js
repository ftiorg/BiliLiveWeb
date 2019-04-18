import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NotMatch from './pages/404';
import Test from './pages/Test';
import Overview from "./pages/Overview";
import Signday from "./pages/Signday";
import Signuser from "./pages/Signuser";
import Live from "./pages/Live";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Basic Routes */}
                    <Route exact path="/" component={Overview}/>
                    {/* Other Routes */}
                    <Route exact path="/day" component={Signday}/>
                    <Route exact path="/user" component={Signuser}/>
                    <Route exact path="/live" component={Live}/>
                    <Route exact path="/test" component={Test}/>
                    {/* NotMatch Routes */}
                    <Route component={NotMatch}/>
                </Switch>
            </Router>
        )
    }
}

export default App;