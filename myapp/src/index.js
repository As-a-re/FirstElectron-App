import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Scripture from './Scripture.jsx'
import Members from './Members.jsx'
import Songs from './Songs.jsx'
import Announcements from './Announcements.js'

const router = createBrowserRouter([
  {
    path:"/",
  element:<App/>,
  },
  {
    path:"/Songs",
  element:<Songs/>,
  },
  {
    path:"/Scripture",
  element:<Scripture/>,
  },
  {
    path:"/Members",
  element:<Members/>,
  },
  {
    path:"/Announcements",
  element:<Announcements/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
