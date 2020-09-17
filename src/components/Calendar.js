import React, {Component} from 'react'
import {startOfWeek, startOfMonth, endOfMonth, format, addDays, isSameDay, subMonths, addMonths} from "date-fns";
import itLocale from "date-fns/locale/it";

class Calendar extends Component {
    constructor() {
        super()
        this.state = {
            currentMonth: new Date(),
            monthStart: startOfMonth(new Date()),
            startDate: startOfWeek(startOfMonth(new Date())),
            displayMonthView: true
        }
    }

    switchCalendarView = (evt, data) => {
        this.setState({ displayMonthView: !this.state.displayMonthView})
    }

    nextMonth = () => {
        const nextMonth = addMonths(this.state.currentMonth, 1)
        this.setState({
            currentMonth : nextMonth,
            monthStart: startOfMonth(nextMonth),
            startDate: startOfWeek(startOfMonth(nextMonth))
        })
    }

    prevMonth = () => {
        const prevMonth = subMonths(this.state.currentMonth, 1)
        this.setState({
            currentMonth : prevMonth,
            monthStart: startOfMonth(prevMonth),
            startDate: startOfWeek(startOfMonth(prevMonth))
        })
    }

    renderHeader() {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header row flex-middle">
                <div className="column col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="column col-center">
                    <span>{format(this.state.currentMonth, dateFormat, { locale: itLocale })}</span>
                </div>
                <div className="column col-end">
                    <div className="icon" onClick={this.nextMonth}>
                        chevron_right
                    </div>
                </div>
            </div>
        )
    }

    renderCells() {
        const rows = []
        const dateFormat = "d"
        let days = [];
        let day = this.state.startDate;
        let endDate = endOfMonth(this.state.currentMonth)
        let formattedDate = "";
        while (day <= endDate) {
            days.push(
                <div className="col cell"  onClick={(evt, data)=>this.switchCalendarView(evt, data)}>
                </div>
            )
            for (let i = 1; i < 8; i++) {
                formattedDate = format(day, dateFormat)
                days.push(
                    <div
                        className={`col cell ${ isSameDay(day, new Date()) ? "selected" : ""}`}
                        key={day}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                )
                day = addDays(day, 1)
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

    renderWeekCells() {

    }

    renderDays() {
        const days = [];
        days.push(
            <div className="col col-center" key={0}>

            </div>
        );

        const dateFormat = "cccc";
        let startDate = startOfWeek(this.state.currentMonth);
        for (let i = 1; i < 8; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat, { locale: itLocale })}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.state.displayMonthView ? this.renderCells(): this.renderWeekCells()}
            </div>
        );
    }
}

export default Calendar