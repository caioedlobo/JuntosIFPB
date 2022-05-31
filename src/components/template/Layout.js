import classes from "./stylesheet/Layout.module.css";
import Navbar from "../atoms/Navbar";

const Layout = (props) => {
  return (
    <div
      /* className={classes.flex} */
      style={{
        display: "flex",
        background: "linear-gradient(to bottom right, #2f6933, #28b00a)",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: `${props.minWidth}`,
      }}
    >
      <Navbar />

      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
