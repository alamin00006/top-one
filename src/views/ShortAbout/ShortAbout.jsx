import React from "react";
import "./ShortAbout.css";

const ShortAbout = () => {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
        <div className="flex justify-center items-center mt-0 xs:mt-5">
          <h2 className="text-black lg:text-3xl xs:text-xl font-bold">
            Welcome To Top One Hygene
          </h2>
        </div>
        <div>
          <p className="text-black p-5 text-xl">
            we believbe that tissue products should be gentle on both you and
            the environment. That's why we've created a line of tissues that are
            not only soft and strong but also eco-friendly. Our tissues are made
            from high-quality recycled fibers, making them an excellent choice
            for those who want to reduce their environmental impact.
          </p>
          <div className="flex justify-center">
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
      <div class="line absolute inset-2/4 top-4 hidden xl:block lg:block md:block sm:block"></div>
    </div>
  );
};

export default ShortAbout;
