import {} from "react";
import { Sidebar } from "../../shared/index";
import HeaderHome from "./headerHome";
import HomeMain from "./main/homeMain";
// import styles from "./home.module.css";

const Home = () => {
  return (
    <div className="flex items-start noselect animate-appear">
      <Sidebar />
      <div className="flex-1">
        <HeaderHome />
        <HomeMain />
      </div>
    </div>
  );
};

export default Home;
