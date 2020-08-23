import React from 'react';
import './App.css';
import Calendar from "./components/Calendar"

function App() {
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
              <Calendar />
          </main>
      </div>
  );
}

export default App;
