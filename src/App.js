import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Calendar from "./components/Calendar"
import { Checkbox } from 'semantic-ui-react'

class App extends Component {
    constructor() {
        super();
        this.state = {
            weeklyView: false
        }
    }

    onChangeViewToggle = (evt, data) => {
        this.setState({ weeklyView: !this.state.weeklyView})
    }

    render() {
        let displayMonthView = this.state.weeklyView === false
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
                    <div className="toggle">
                        <Checkbox toggle label="Settimana" selected={displayMonthView} onClick={(evt, data)=>this.onChangeViewToggle(evt, data)}/>
                        <Calendar displayMonthView={displayMonthView}/>
                    </div>
                </main>

            </div>
        );
    }
}

export default App;
