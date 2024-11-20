import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home.jsx';
import Course from './Components/Course.jsx';
import Admission from './Components/Admission.jsx';
import Faculty_Stuff from './Components/Faculty_Stuff.jsx';
import EventnNews from './Components/EventnNews.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Offers from './Pages/Offers.jsx';
import CampusTour from './Pages/CampusTour.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/facultynstuff",
        element: <Faculty_Stuff></Faculty_Stuff>,
      },
      {
        path: "/eventnnews",
        element: <EventnNews></EventnNews>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/campustour",
        element: <CampusTour></CampusTour>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
