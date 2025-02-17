import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              ORBIT THE EARTH
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Earth travels around the Sun in a big circle, like a dance. It's about 149.60 million kilometers away from the Sun, and it takes about 365.256 days to complete one full circle. This path is like a stretched-out oval, but it's still really close to the Sun. So, Earth's journey around the Sun is like a graceful dance in space.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
