import { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import HeaderCartButton from './components/Layout/HeaderCartButton';
import Header from './components/Layout/Header';
import Layout from './components/Layout/Layout';
//import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import AuthForm from './components/Auth/AuthForm';
import Cart from './components/Cart/Cart';
//import CartProvider from './store/CartProvider';

import Addapp from './components/Users/Addapp';
import AvailableMovies from './components/Profile/AvailableMovies';
function App() {
  const authCtx = useContext(AuthContext);
const [cartIsShown,setCartIsShown]=useState(false)

const showCartHandler=()=>{
  setCartIsShown(true)
}
const hideCartHandler=()=>{
  setCartIsShown(false)
}
  return (
    <Layout>
      <Switch>

        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          
          {/* {authCtx.isLoggedIn && <UserProfile />} */}
              {!authCtx.isLoggedIn &&  
                <AuthForm/>} 
 {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />   
            <AvailableMovies/>
            <Addapp/>
       
         {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
       
      </Switch>
    </Layout>
  );
}

export default App;
