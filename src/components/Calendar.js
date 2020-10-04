import React, {Component} from 'react'
import {startOfWeek, startOfMonth, endOfMonth, format, addDays, isSameDay, isSameMonth, subMonths, addMonths} from "date-fns";
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

    switchCalendarView = (evt, data, day) => {
        this.setState({
            displayMonthView: !this.state.displayMonthView,
            startDateSelectedView: day
        })
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
            <div>
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
                { !this.state.displayMonthView && this.renderBackButton() }
            </div>
        )
    }

    renderBackButton() {
        return (
            <div className="header row flex-middle">
                <div className="column col-start">
                    <div className="icon" onClick={(evt, data)=>this.switchCalendarView(evt, data)}>
                        chevron_left
                    </div>
                </div>
                <div className="column col-center subtitle">
                    <span>Back</span>
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
            let startWeekDate = day
            days.push(
                <div className="col cell"  onClick={(evt, data)=>this.switchCalendarView(evt, data, startWeekDate)}>
                </div>
            )
            for (let i = 1; i < 8; i++) {
                formattedDate = format(day, dateFormat)
                days.push(
                    <div
                        className={`col cell ${ !isSameDay(day, new Date()) ? ( !isSameMonth(day, this.state.monthStart) ? "disabled" : "" ) : "selected"}`}
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

    renderWeekDayNumbers() {
        const days = [];
        days.push(
            <div className="col col-center" key={0}>

            </div>
        );
        let day = this.state.startDateSelectedView
        let formattedDate = ""
        const dateFormat = "d"
        for (let i = 1; i < 8; i++) {
            formattedDate = format(day, dateFormat)
            days.push(
                <div className="col col-center" key={i}>
                    <p>{formattedDate}</p>
                </div>
            );
            day = addDays(day, 1)
        }
        return <div className="days row">{days}</div>;
    }

    renderWeekCells() {
        return (
            <div>
                {this.renderWeekDayNumbers()}
                {this.renderWeekHourCells()}
            </div>)
    }

    renderWeekHourCells() {
        const startHour = 7
        const endHour = 23
        const total = (endHour - startHour) * 7

        const rows = []
        let cells = [];
        let cell = 0
        while (cell <= total) {
            cells.push(
                <div className="col cell">
                    <span>{cell/7+startHour + ":00"}</span>
                </div>
            )
            for (let i = 1; i < 8; i++) {
                cells.push(
                    <div className="col cell" key={cell}>
                    </div>
                )
                cell += 1
            }
            rows.push(
                <div className="row" key={cell}>
                    {cells}
                </div>
            );
            cells = [];
        }

        return <div className="body">{rows}</div>;
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