import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
