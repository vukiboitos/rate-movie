
import { useContext} from 'react';
import { Link } from 'react-router-dom';
//import HeaderCartButton from './HeaderCartButton';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';
//import Cart from '../Cart/Cart';
// import Header from './Header';
// import AuthForm from '../Auth/AuthForm';
// import HeaderCartButton from './HeaderCartButton';

const MainNavigation = (props) => {
//   const [cartIsShown,setCartIsShown]=useState(false)

// const showCartHandler=()=>{
//   setCartIsShown(true)
// }
// const hideCartHandler=()=>{
//   setCartIsShown(false)
// }
  const authCtx = useContext(AuthContext);
  
 
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Moviehood</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile1</Link>
              
            </li> 
          )}
          {isLoggedIn && (
            <li className={classes.header}>
              <button onClick={logoutHandler}>Logout</button>
              </li>
             )}
             {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile2</Link>
              
            </li> 
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;