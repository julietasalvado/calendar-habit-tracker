import {BrowserRouter as Router} from "react-router-dom";
import {Grid, Segment, Sidebar, Menu} from "semantic-ui-react";
import {Route} from "react-router";
import Calendar from "./Calendar";
import TopicSection from "./TopicSection";
import React, {Component} from "react";

export default class AppBody extends Component {
    state = { activeItem: 'home' }
    handleMenuItemClick = (e, { name }) => this.setState({ activeItem: name })

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
        const { activeItem } = this.state

        return (
            <Router>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation= 'push'
                        icon='labeled'
                        inverted
                        vertical
                        visible='true'
                        width='thin'
                    >
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleMenuItemClick}
                            href='/'
                        />
                        <Menu.Item
                            name='libri'
                            active={activeItem === 'books'}
                            onClick={this.handleMenuItemClick}
                            href='/books'
                        />
                    </Sidebar>
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