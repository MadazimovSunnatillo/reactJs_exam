import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


// Styles
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// Route
import {BrowserRouter as Router} from 'react-router-dom'

// Toast
import { ToastContainer } from 'react-toastify'
import axios  from 'axios';
import { localTokenKeys } from './token'

// Axios
axios.defaults.baseURL = "https://nt-jobify.onrender.com/api/v1";
axios.defaults.headers.common["Content-Type"] = 'application/json'

let token = localStorage.getItem(localTokenKeys);
if(token) axios.defaults.headers.common['access-token'] = token


ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
    <App />
  <ToastContainer theme='colored'/>
</Router>
)
