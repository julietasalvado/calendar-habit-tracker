import {BrowserRouter as Router} from "react-router-dom";
import {Grid, Segment, Sidebar} from "semantic-ui-react";
import {Route} from "react-router";
import Calendar from "./Calendar";
import TopicSection from "./TopicSection";
import React, {Component} from "react";

export default class AppBody extends Component {

    render() {
        const home =
            <Segment basic>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Calendar/>
                    </Grid.Column>
                    <Grid.Column>
                        <TopicSection/>
                    </Grid.Column>
                </Grid>
            </Segment>

        const books =
            <Segment basic>
                <Grid columns={2} relaxed='very'>
                </Grid>
            </Segment>

        return (
            <Router>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar.Pusher>
                        <Route exact path="/">
                            {home}
                        </Route>
                        <Route exact path="/books">
                            {books}
                        </Route>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Router>
        )
    }
}