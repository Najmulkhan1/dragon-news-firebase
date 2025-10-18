import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "category/:id",
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
            }
        ]
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>
    },
    {
        path: "/news",
        element: <h2>News layout</h2>
    },
    {
        path: "/*",
        element: <h2>Error</h2>
    }
])

export default router