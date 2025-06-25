
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Loading from "../Component/Loading";
import BillingLayout from "../Layouts/BillingLayout";
import Bills from "../Pages/Bills";
import BillDetails from "../Component/BillDetails";
import Error from "../Component/Error";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ProfileLayout from "../Layouts/ProfileLayout";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Component/UpdateProfile";



const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch('../companyData.json'),
        Component: Home,
      },

    ]
  },
  {
    path: '/bills',
    element:
      <PrivateRoute>
        <BillingLayout></BillingLayout>
      </PrivateRoute>,
    children: [
      {
        path: '/bills',
        hydrateFallbackElement: <Loading> </Loading>,
        loader: () => fetch('../Bills.json'),
        Component: Bills
      },
      {
        path: '/bills/:id',
        hydrateFallbackElement: <Loading> </Loading>,
        loader: () => fetch('../Bills.json'),
        Component: BillDetails
      },
     
    ]
  },
  {
    path: '/auth',
    Component: AuthLayouts,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register,
      },

    ]
  },
  {
    path: '/profile',
    element:
      <PrivateRoute>
        <ProfileLayout></ProfileLayout>
      </PrivateRoute>,
    children: [
      {
        index: true,
        Component: Profile
      },
      {
        path: '/profile/my-profile',
        Component: Profile
      },
      {
        path: '/profile/my-profile/update',
        Component: UpdateProfile

      }
    ]
  },
  {
    path: '*',
    Component: Error
  }

]);

export default Router;