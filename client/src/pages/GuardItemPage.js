import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "flowbite-react";
import {fetchGuardById} from "../api/guardAPI";
import GuardCard from "../components/GuardCard";

const GuardItemPage = () => {

    const [guard, setGuard] = useState({type: []})
    const {id} = useParams()

    useEffect(() => {
        fetchGuardById(id).then(data => setGuard(data))
    }, [])

    return (
        <div className="w-3/4 mx-auto">
            <Breadcrumb className="bg-gray-50 py-3 px-5 dark:bg-gray-900 mb-8">
                <Breadcrumb.Item>
                    <Link to='/guards'>
                        Наряды
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    #{id}
                </Breadcrumb.Item>
            </Breadcrumb>

            <GuardCard guard={guard} />
        </div>
    );
};

export default GuardItemPage;