import React , { useState } from 'react'
import { createRoot } from 'react-dom/client' // <--- Yeh line aisi honi chahiye
import './App.css';
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(

    <App/>

)