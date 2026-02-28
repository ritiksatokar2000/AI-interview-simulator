import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import InterviewArea from './components/InterviewArea.jsx'
import Result from './components/Result.jsx'


const router = createBrowserRouter([
  {
    path:"/", element:<App />,
    children:[ 
      {path:"/" , element:<Home />},
      {path:"/interview" , element:<InterviewArea />},
      {path:"/result" , element:<Result/>}
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 

  </StrictMode>,
)
