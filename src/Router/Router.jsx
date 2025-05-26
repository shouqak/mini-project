import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import SingupPage from "../Pages/SingupPage"



function Layout() {
  return (
    <>

      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home/> },
{ path: "/login", element: <Login/> },
{ path: "/signup", element: <SingupPage/> }

    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router