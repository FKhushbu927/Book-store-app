
import reactLogo from './assets/react.svg'

import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'

function App() {
 

  return (
    <>
      
       
       {/* header */}

       <Header></Header>
       <Outlet></Outlet>
       {/* footer */}
   
      
    </>
  )
}

export default App
