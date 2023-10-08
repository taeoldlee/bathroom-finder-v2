import { createBrowserRouter } from "react-router-dom";

import { App } from "./App.jsx";
import { LandingLocation } from "./screens/LandingLocation.jsx";
import { ClosestBathrooms } from "./screens/ClosestBathrooms.jsx";
import { FilterPage } from "./screens/FilterPage.jsx";


const router = createBrowserRouter([
    {
        path: "/bathroom-finder-v2",
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingLocation />,
            },
            {
                path: "closest-bathrooms",
                element: <ClosestBathrooms />,
            },
            {
                path: "filters",
                element: <FilterPage />,
            },
        ],
    },
]);

export default router;



// ? hello
// ! WTF
// * hi
// ~ w
//@ hello
//$ monetary 
// hello

