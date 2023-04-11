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
        <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Список{'\t'}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">обучающихся</span>
            </h1>

            <div className="mx-auto w-2/3">
                {/* Error message */}
                {studentError && (
                    <Alert color="failure" withBorderAccent={true} rounded={true} icon={HiInformationCircle}>
                    <span>
                        <span className="font-medium">Info alert!</span>
                        {' ' + studentError}
                    </span>
                    </Alert>
                )}
                {/* List of all students */}
                <StudentsList students={students} />
            </div>
        </div>
    );
};

export default StudentsPage;