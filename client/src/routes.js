import {GUARDS_ROUTE, STUDENTS_ROUTE} from "./utils/urls";
import GuardsPage from "./pages/GuardsPage";
import StudentsPage from "./pages/StudentsPage";

export const routes = [
    {
        path: GUARDS_ROUTE,
        element: <GuardsPage />
    },
    {
        path: STUDENTS_ROUTE,
        element: <StudentsPage />
    },
]