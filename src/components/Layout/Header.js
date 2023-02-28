import { Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import filmImage from './../asset/1film.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  
 
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  }

  return (
    <Fragment>
    
       <header className={classes.header}>
        <h1>Movieshood</h1>
       <HeaderCartButton onClick={props.onShowCart} />
      
       {isLoggedIn && (
            <li className={classes.button}>
              <button onClick={logoutHandler}>Logout</button>
             
           
              </li>
               )}
              
           
             
               
      </header>
    
      <div className={classes['main-image']}>
        <img src={filmImage} alt='Movies Top' />
      </div>
     
    </Fragment>
  );
};

export default Header;