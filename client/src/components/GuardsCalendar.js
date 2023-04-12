import React from "react";
import {Calendar} from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import GuardsCalendarItem from "./GuardsCalendarItem";
import {ruLocale} from "../utils/locale";


const GuardsCalendar = () => {
    function renderCell(date) {
        const isoDate = date.toISOString().slice(0, 10)

        return (
            <GuardsCalendarItem date={isoDate} />
        );
    }

    return <Calendar locale={ruLocale} isoWeek={true} bordered renderCell={renderCell}/>;
};

export default GuardsCalendar