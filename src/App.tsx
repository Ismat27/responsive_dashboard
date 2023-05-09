import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './App.css'

const Home = () => {
  return (
    <div>
      <h2 className='text-2xl text-red'>home page</h2>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/abc',
    element: <p>abc</p>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
