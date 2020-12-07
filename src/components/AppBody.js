import {BrowserRouter as Router} from "react-router-dom"
import {Grid, Segment, Sidebar, Menu, Label} from "semantic-ui-react"
import {Route} from "react-router"
import Calendar from "./Calendar"
import TopicSection from "./TopicSection"
import NewBookSection from "./NewBookSection"
import React, {Component} from "react"
import StartedBookSection from "./StartedBookSection";
import TopicDataService from "../services/TopicDataService";

export default class AppBody extends Component {
    state = { activeItem: 'home', startedBooks: [] }
    handleMenuItemClick = (e, { name }) => this.setState({ activeItem: name })

    retrieveStartedBook() {
        TopicDataService.getBooks()
            .then(response => {
                this.setState({
                    startedBooks: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        this.retrieveStartedBook()
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
        const bookList = this.state.startedBooks;
        const startedBooksList = bookList.map((book) => <StartedBookSection title={book.title}
                                                                             numParts={book.numParts}
                                                                             completed={book.completed}
        /> )
        const books =
            <Segment basic>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <NewBookSection/>
                    </Grid.Column>
                </Grid>
                <Segment>
                    <Label color='teal' horizontal>
                        Libri avviati
                    </Label>
                    {startedBooksList}
                </Segment>
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