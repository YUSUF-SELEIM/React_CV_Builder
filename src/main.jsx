import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SideBar from './components/SideBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='flex w-full h-full'>
    <SideBar></SideBar>
    <App />
   </div>
  </React.StrictMode>,
)
