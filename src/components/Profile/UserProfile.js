
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';



const UserProfile = (props) => {
  
  return (
    <section className={classes.profile}>
      <h1>Yours Favorite movies</h1>
    
      <ProfileForm />
      
    </section>
  );
};

export default UserProfile;
