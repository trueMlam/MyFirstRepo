import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

function start() {
  const el = document.getElementById('root')
  if (el) {
    ReactDOM.createRoot(el).render(<App />)
  } else {
    console.log('no root')
  }
}

document.addEventListener("DOMContentLoaded", start)