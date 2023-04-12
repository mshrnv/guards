import React, {useEffect, useState} from 'react';
import {Badge} from "flowbite-react";
import {useFetching} from "../hooks/useFetching";
import {fetchGuardsAtDate} from "../api/guardAPI";

const GuardsCalendarItem = ({date}) => {

    const [guards, setGuards] = useState([])

    const [fetchOneDateGuards, isGuardsLoading, guardsError] = useFetching(async (date) => {
        const response = await fetchGuardsAtDate(date)
        setGuards(response)
    })

    useEffect(() => {
        fetchOneDateGuards(date)
    }, [])

    return (
        <div>
            {guards.map((item) => (
                <Badge key={date + item.type.name} color="indigo" size="sm" className="mb-1">
                    {item.type.name}
                </Badge>
            ))}
        </div>
    );
};

export default GuardsCalendarItem;