import classes from './StartingPageContent.module.css';
import filmImage from "./../asset/1film.jpg"
const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <img src={filmImage} alt='Movies Top' />
    </section>
  );
};

export default StartingPageContent;
