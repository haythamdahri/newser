import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Article from "../components/Article";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "articles/:id",
                element: <Article />
            }
        ]
    }
  ]);

  export default router;