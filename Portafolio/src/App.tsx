import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Main from "./components/Main"


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
