import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 
import { HOME } from './HOME/HOME'
import { History } from './History/History'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HOME/>
<History/>
  </React.StrictMode>
)
