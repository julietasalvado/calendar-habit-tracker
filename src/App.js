import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Calendar from "./components/Calendar"
import TopicSection from "./components/TopicSection"
import Status from "./components/Status"
import { Grid, Segment } from 'semantic-ui-react'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
                            Habit Tracker Calendar
                        </span>
                    </div>
                </header>
                <main>
                    <Segment>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                                <Calendar/>
                            </Grid.Column>
                            <Grid.Column>
                                <TopicSection/>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <div className="footer">
                        <Status/>
                    </div>
                </main>

            </div>
        );
    }
}

export default App;
