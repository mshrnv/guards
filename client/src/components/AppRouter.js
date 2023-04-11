import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(item => (
                    <Route key={item.path} {...item} exact />
            ))}
            <Route path="*" element={<Navigate to="/guards" />} />
        </Routes>
    );
};

export default AppRouter;