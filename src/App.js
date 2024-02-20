
import './App.css';
import {Route,Routes}from 'react-router-dom'
import Login from './components/Login';
import Navbar1 from './Navbar1'
import Registre from './components/Registre';
import Product from './Product';
import Footer from './Footer';
import Jacket from './MEN/Jacket';
import Background from './components/Background';
import Blazer from './MEN/Blazer';
import Sweatwear from './MEN/Sweatwear';
import Hoodie from './MEN/Hoodie';
import TShirt from './MEN/T-Shirt';
import PoloShirt from './MEN/Polo Shirt';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jeans from './MEN/Jeans';
import Cargo from './MEN/Cargo';
import Short from './MEN/Short';
import Chinos from './MEN/Chinos';
import TrackPants from './MEN/TrackPants';
import Joggers from './MEN/Joggers';
import Blouse from './WOMAN/Blouze';
import Tshirts from './WOMAN/T-Shirt';
import Tanktop from './WOMAN/TankTop';
import Sweater from './WOMAN/Sweater';
import Robe from './WOMAN/Robe';
import Blazers from './WOMAN/Blaze';
import Croptop from './WOMAN/Crop Top';
import Jean from './WOMAN/Jeans';
import Leggings from './WOMAN/Leggings';
import Shorts from './WOMAN/Short';
import Culottes from './WOMAN/Culottes';
import Jeggings from './WOMAN/Jeggings';
import Corpipants from './WOMAN/Carpi Pants';
import ShoppingCart from './ShoppingCart';
import Order from './components/Order';


function App() {
  return (
    <div className="app">

{/* <Navtodo></Navtodo> */}
<Navbar1/>

      <Routes>
          <Route path='/panier' element={<><ShoppingCart/></>}></Route>

        <Route path='/login' element={<><Login></Login></>}>login</Route>
        <Route path='/register' element={<><Registre/></>}>register</Route>
        <Route path='/' element={<> <Background/><Product/></>}></Route>
        <Route path='/men/jacket' element={<><Jacket/></>}></Route>
        <Route path='/men/sweatwear' element={<><Sweatwear/></>}></Route>
        <Route path='/MEN/hoodie' element={<><Hoodie/></>}></Route>
        <Route path='/men/blazer' element={<><Blazer/></>}></Route>
        <Route path='/men/t-shirt' element={<><TShirt/></>}></Route>
        <Route path='/men/polo-shirt' element={<><PoloShirt/></>}></Route>
        <Route path='/men/jeans' element={<><Jeans/></>}></Route>
        <Route path='/men/cargo' element={<><Cargo/></>}></Route>
        <Route path='/men/short' element={<><Short/></>}></Route>
        <Route path='/men/chinos' element={<><Chinos/></>}></Route>
        <Route path='/men/trackpants' element={<><TrackPants/></>}></Route>
        <Route path='/men/joggers' element={<><Joggers/></>}></Route>

           <Route  path='/women/blouse' element={<><Blouse/></>} ></Route>
           <Route  path='/women/t-shirt' element={<><Tshirts/></>} ></Route>
         <Route  path='/women/tank-top' element={<><Tanktop/></>} ></Route>
          <Route  path='/women/sweater' element={<><Sweater/></>} ></Route>
           <Route  path='/women/cardigan' element={<><Robe/></>}></Route>
              <Route  path='/women/blazer' element={<><Blazers/></>} ></Route>
            <Route  path='/women/crop-top' element={<><Croptop/></>} ></Route>
             <Route  path='/women/jeans' element={<><Jean/></>} ></Route>
             <Route  path='/women/leggings' element={<><Leggings/></>} ></Route>
              <Route  path='/women/shorts' element={<><Shorts/></>} ></Route>
           <Route  path='/women/culottes' element={<><Culottes/></>} ></Route>
                <Route  path='/women/jeggings' element={<><Jeggings/></>} ></Route>
           <Route  path='/women/corpi-pants' element={<><Corpipants/></>} ></Route>
           <Route  path='/ordre' element={<><Order/></>} ></Route>

      </Routes>
     
      <>
     <Footer/>
     </>
          
    
      
        
    
     
   
   

     
  
    </div>
   
  );
}

export default App;


