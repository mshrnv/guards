import {GUARD_ITEM_ROUTE, GUARDS_ROUTE, STUDENTS_ROUTE} from "./utils/urls";
import GuardsPage from "./pages/GuardsPage";
import StudentsPage from "./pages/StudentsPage";
import GuardItemPage from "./pages/GuardItemPage";

export const routes = [
    {
        path: GUARDS_ROUTE,
        element: <GuardsPage />
    },
    {
        path: GUARD_ITEM_ROUTE,
        element: <GuardItemPage />
    },
    {
        path: STUDENTS_ROUTE,
        element: <StudentsPage />
    },
]