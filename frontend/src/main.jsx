import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Toaster } from "@/components/ui/toaster"

import { WorkoutContextProvider} from '@/context/WorkoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextProvider> 
    <App />
    <Toaster />
    </WorkoutContextProvider>
  </React.StrictMode>
)
