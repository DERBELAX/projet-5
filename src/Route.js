import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from'./pages/Error';
import Houssing from'./pages/Hossing';

function Router () {
  return (
   <main>
    
      <Routes>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        
        <Route path='/houssing/:id' element={<Houssing/>}></Route>
        <Route path='*' element={<Error/>} ></Route>
      </Routes>
      
    </main>
  );
}

export default Router;