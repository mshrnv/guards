import React from 'react';
import {Badge, Card} from "flowbite-react";
import GuardRole from "./GuardRole";
import {range} from "../utils/range";

const GuardCard = ({guard}) => {
    return (
        <div>
            <Card>
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {guard.type.name}
                </h5>
                <Badge color="purple" size="lg" className="w-fit">
                    {guard.date}
                </Badge>
                <hr />
                {
                    guard.type.type_roles.map(typeRole => (
                        range(typeRole.count).map(roleNum => (
                            <GuardRole
                                typeRole={typeRole}
                                roleNum={roleNum}
                                rolesCount={typeRole.count}
                                student_guard={guard.student_guards.find(item =>
                                    item.roleId === typeRole.role.id &&
                                    item.guardId === guard.id &&
                                    item.roleNum === roleNum
                                )}
                            />
                        ))
                    ))
                }
            </Card>
        </div>
    );
};

export default GuardCard;