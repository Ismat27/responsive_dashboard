import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './App.css'
import DashboardHome from './pages/DashboardHome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardHome />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
