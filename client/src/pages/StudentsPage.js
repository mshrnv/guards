import React, {useEffect, useState} from 'react';
import StudentsList from "../components/StudentsList";
import {Alert} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";
import {useFetching} from "../hooks/useFetching";
import {fetchAllStudents} from "../api/studentAPI";

const StudentsPage = () => {

    const [students, setStudents] = useState([])

    const [fetchStudents, isStudentsLoading, studentError] = useFetching(async () => {
        const response = await fetchAllStudents()
        setStudents(response)
    })

    useEffect(() => {
        fetchStudents()
    }, [])

    return (
        <div className="flex flex-row">
            <div className="mx-auto w-2/3">
                {studentError && (
                    <Alert color="failure" withBorderAccent={true} rounded={true} icon={HiInformationCircle}>
                    <span>
                        <span className="font-medium">Info alert!</span>
                        {' ' + studentError}
                    </span>
                    </Alert>
                )}
                <StudentsList students={students} />
            </div>
        </div>
    );
};

export default StudentsPage;