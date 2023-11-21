import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import App from './App'
import './index.css'
import { TagsData } from './TagsData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App genero = "blues"/> 
  </React.StrictMode>,
)
