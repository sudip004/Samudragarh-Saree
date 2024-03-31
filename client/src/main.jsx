import {Suspense} from 'react'
import{BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {UseProvider} from './context/Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Suspense fallback={<h1>Loading......</h1>}>
      <UseProvider>
      <App />
      </UseProvider>
    </Suspense>
  </BrowserRouter>

)
