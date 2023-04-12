import React from 'react';
import {Button, Card} from "flowbite-react";

const GuardCard = ({guard}) => {
    return (
        <div>
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {guard.type.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {guard.date}
                </p>
                <Button>
                    Read more
                </Button>
            </Card>
        </div>
    );
};

export default GuardCard;