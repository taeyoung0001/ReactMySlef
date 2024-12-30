import classes from "./loading.module.css";
const MealsLoadingPage = () => {
  return (
    <div>
      <p className={classes.loading}>Fetching Melas information...</p>
    </div>
  );
};

export default MealsLoadingPage;
