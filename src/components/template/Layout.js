import classes from "./stylesheet/Layout.module.css";
import Navbar from "../atoms/Navbar";

const Layout = (props) => {
  return (
    <div className={classes.flex}>
      <Navbar />

      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
