import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
