
import './App.css';
import 'animate.css';
import { Routes, Route  } from "react-router-dom";
import Support  from './components/Support';
import Index1 from './components/Index1';
import Service  from './components/Service';
import Platform  from './components/Platform';
import Learn  from './components/Learn';
import Home from './components/Home'



function App() {
  return (
    
    <div className="App">

          <Index1/>
        <Routes>
 
          <Route path='/' element={<Home/>} />
          
          <Route path='/platform' element={<Platform/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/learn' element={<Learn/>} />
        </Routes>
        
         
       



    </div>
  );
}

export default App;
