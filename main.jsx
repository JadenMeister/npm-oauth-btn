

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './src/index.css' // Tailwind 등 스타일 사용하는 경우

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)