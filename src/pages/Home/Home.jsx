import React from "react";
import Banner from "../../views/Navbar/Banner/Banner";
import ShortAbout from "../../views/ShortAbout/ShortAbout";

const Home = () => {
  return (
    <div className="lg:mx-28 xl:mx-28">
      <div>
        <Banner />
      </div>
      <div>
        <ShortAbout />
      </div>
    </div>
  );
};

export default Home;
