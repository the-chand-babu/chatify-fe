"use client";

import Navbar from "@Components/Molecules/Navbar";
import { LeftSideBar } from "@Components/Organisms";
import { GlobalProvider } from "@Components/Providers/GlobalProvider/store";
import "./style.scss";

const Home = () => {
  return (
    <div id="home-main-container">
      <GlobalProvider>
        <Navbar />
        <div className="message-container">
          <LeftSideBar />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default Home;
