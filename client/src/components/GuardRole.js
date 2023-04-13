import React from 'react';
import {Badge} from "flowbite-react";

const GuardRole = ({typeRole, roleNum, rolesCount, student_guard}) => {
    return (
        <div>
            <div id="select">
                <div className="mb-2">
                    <div className="inline-block">
                        <Badge color={typeRole.role.color} size="sm" className="w-fit">
                            {roleNum} / {rolesCount}
                        </Badge>
                    </div>
                    <h6 className="inline-block font-bold ml-2">
                        {typeRole.role.name}
                    </h6>
                </div>
                {
                    student_guard ? (
                        <h6 className="p-1 border-2 w-fit">{student_guard.student.fio}</h6>
                    ) : (
                        <h6>Не выбран</h6>
                    )
                }
            </div>
        </div>
    );
};

export default GuardRole;