import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Layout.module.css";
function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
