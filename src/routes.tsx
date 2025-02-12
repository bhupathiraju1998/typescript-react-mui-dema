import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import BookMark from "./pages/bookmark";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>
    },
    {
        path:"/bookmarks",
        element:<BookMark/>,
        errorElement:<Error/>
    },
    {
        path:"/movies",
        element:<Movie/>,
        errorElement:<Error/>
    },
    {
        path:"/tv-series",
        element:<TvSeries/>,
        errorElement:<Error/>
    },
])