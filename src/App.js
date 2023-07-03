import Login from './Login';
import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import ProductDetails from './Product-Details';


function App() {
  return (
    <div>
      <Navigation/>
      
      <BrowserRouter>
      <Routes>
      <Route path='/Login' element= {<Login/>}></Route>
      <Route path='/Home' element = {<Home/>}></Route>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      </Routes> 
      </BrowserRouter>    
    </div>
  )
}
export default App;
