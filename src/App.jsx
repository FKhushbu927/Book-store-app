
import reactLogo from './assets/react.svg'

import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      
       
       {/* header */}

       <Header></Header>
       <Outlet></Outlet>
       {/* footer */}
       <Footer></Footer>
   
      
    </>
  )
}

export default App
