import React from 'react';
import GuardsCalendar from "../components/GuardsCalendar";
import {Breadcrumb} from "flowbite-react";
import {Link} from "react-router-dom";

const GuardsPage = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Breadcrumb
                aria-label="Solid background breadcrumb example"
                className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
            >
                <Breadcrumb.Item>
                    <Link to='/guards'>
                        Наряды
                    </Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <GuardsCalendar />
        </div>
    );
};

export default GuardsPage;