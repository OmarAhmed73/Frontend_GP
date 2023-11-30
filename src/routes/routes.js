import { createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import App from "../App";
import Error from "../pages/Error/Error";
import Contact from "../pages/contact/Contact";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ShowLessons from "../components/Lessons/ShowLessons";
import Summarization from "../pages/Summarization/Summarization";



export const routes = createBrowserRouter([
 {
    path: "",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
        path: "/",
        element: <Home/>,
        },
        {
        path: "/login",
        element: <Login/>,
        },
        {
        path: "/contact",
        element: <Contact/>,
        },
        {
        path: "/ForgetPassword",
        element: <ForgetPassword/>,
        },
        {
            path: '/Lessons',
            element: <ShowLessons/>
        },
        {
            path: '/Summarization',
            element: <Summarization/>
        }
    ]
  }
]);