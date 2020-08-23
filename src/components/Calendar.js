import React, {useState} from 'react'
import {startOfWeek, format, addDays} from "date-fns";

function Calendar() {
    const [currentMonth] = useState(new Date());

    function renderHeader () {

    }

    function renderCells () {
    }

    function renderDays() {
        const dateFormat = "cccc";
        const days = [];
        let startDate = startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
}

export default Calendar