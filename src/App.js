import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { useSelector } from 'react-redux';
import Header from './components/Shared/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
 const show= useSelector(arg => arg.show.show)
 const show_login= useSelector(arg => arg.show_login.show_login)
 const show_login_register=   useSelector(arg => arg.show_login.show_login_register)   



let homeComponent= show && !show_login &&  <Home/> 
let cartComponent= !show && !show_login && <Cart/>
let loginComponent= !show && show_login && show_login_register && <Login/>
let registerComponent= !show && show_login && !show_login_register && <Register/>

  return (
    <div className="App">
      
        { homeComponent }
        { cartComponent }
        { loginComponent }
        { registerComponent }



       

      


    



      
    </div>
  );
}

export default App;
