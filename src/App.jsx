import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './pages/Home'
import './App.css'
import Vision from './pages/Vision'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/vision' element={<Vision/>}/>
<Route path='/doctors' element={<Doctors/>}/>
<Route path='/contact' element={<Contact/>}/>


</Routes>
</BrowserRouter>    
    </>
  )
}

export default App