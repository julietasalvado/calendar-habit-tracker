import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import AppBody from "./components/AppBody"
import Status from "./components/Status"

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
                    <AppBody/>
                    <div className="footer">
                        <Status/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
