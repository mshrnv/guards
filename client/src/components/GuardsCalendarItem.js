import React, {useEffect, useState} from 'react';
import {Badge} from "flowbite-react";
import {fetchGuardsAtDate} from "../api/guardAPI";
import {Link} from "react-router-dom";

const GuardsCalendarItem = ({date}) => {

    const [guards, setGuards] = useState([])

    useEffect(() => {
        fetchGuardsAtDate(date).then(data => setGuards(data))
    }, [])

    return (
        <div>
            {guards.map((item) => (
                <Link to={"/guard/" + item.id}>
                    <Badge href key={date + item.type.name} color="indigo" size="sm" className="mb-1">
                        {item.type.name}
                    </Badge>
                </Link>
            ))}
        </div>
    );
};

export default GuardsCalendarItem;