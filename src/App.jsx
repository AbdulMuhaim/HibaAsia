import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './pages/Home'
import './App.css'
import Vision from './pages/Vision'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/vision' element={<Vision/>}/>


</Routes>
</BrowserRouter>    
    </>
  )
}

export default App