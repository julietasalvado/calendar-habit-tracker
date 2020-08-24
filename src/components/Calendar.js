import React, {useState} from 'react'
import {startOfWeek, startOfMonth, endOfMonth, format, addDays} from "date-fns";

function Calendar() {
    const [currentMonth] = useState(new Date());
    const monthStart = startOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart)

    function renderHeader () {

    }

    function renderCells () {
        const rows = []
        const dateFormat = "d"
        let days = [];
        let day = startDate;
        let endDate = endOfMonth(currentMonth)
        console.log(endDate)
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat)
                days.push(
                    <div
                        className="col cell"
                        key={day}
                    >
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className="body">{rows}</div>;
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