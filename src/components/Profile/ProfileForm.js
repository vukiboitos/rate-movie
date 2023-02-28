import { useRef, useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
//import AuthForm from '../Auth/AuthForm';
import Cart from '../Cart/Cart';
import Header from '../Layout/Header';
import AuthContext from '../../store/auth-context';
import filmImage from "./../asset/1film.jpg"
import Card from '../ui/Card';

import AvailableMovies from './AvailableMovies';


const ProfileForm = () => {
  const history = useHistory();
 
   const [cartIsShown, setCartIsShown] = useState(false);
   
   const showCartHandler = () => {
     setCartIsShown(true);
   };
 
   const hideCartHandler = () => {
     setCartIsShown(false);
   };
  const newPasswordInputRef = useRef();
  const enteredNewPassword = newPasswordInputRef.current.value;
  
  const authCtx = useContext(AuthContext);
  
  const submitHandler = (event) => {
    event.preventDefault();

 
    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBXZiCWCNz-x9gJzVlk2ONtwyszXKcpr1I', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!

      history.replace('/');
    });
  }
  return (<section>
    <Card onSubmit={submitHandler}>
     
         
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />  
        <img src={filmImage} alt='Movies Top' /> 
        
  <AvailableMovies/>
      </Card>
</section>
    
    
  );
};

export default ProfileForm;