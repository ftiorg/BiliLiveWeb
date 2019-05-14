import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NotMatch from './pages/404';
import About from './pages/About';
import Overview from "./pages/Overview";
import Signday from "./pages/Signday";
import Signrank from "./pages/Signrank";
import Live from "./pages/Live";
import User from './pages/User';
import DanmuLog from "./pages/Danmu";
import GiftLog from "./pages/Gift";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Basic Routes */}
                    <Route exact path="/" component={Overview}/>
                    {/* Other Routes */}
                    <Route exact path="/day" component={Signday}/>
                    <Route exact path="/rank" component={Signrank}/>
                    <Route exact path="/live" component={Live}/>
                    <Route exact path="/user" component={User}/>
                    <Route exact path="/danmu" component={DanmuLog}/>
                    <Route exact path="/gift" component={GiftLog}/>
                    <Route exact path="/about" component={About}/>

                    {/* NotMatch Routes */}
                    <Route component={NotMatch}/>
                </Switch>
            </Router>
        )
    }
}

export default App;