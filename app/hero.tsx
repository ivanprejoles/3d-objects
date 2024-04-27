"use client";

import Spline from '@splinetool/react-spline';


function Hero() {
  return (
    <>
    <div className="absolute inset-0 h-full w-full" />
    <div className="h-[50rem] flex flex-col">
      <div className="relative z-10 h-full w-full flex flex-col justify-start md:justify-center overflow-hidden">
        <Spline scene="https://prod.spline.design/9v4o9uqkyHoEqXSp/scene.splinecode" className=" md:absolute md:w-[50%] h-full overflow-hidden flex items-center justify-end md:left-[15rem]"  />
        <h1 className="md:max-w-full lg:max-w-3xl md:ml-[7rem] z-10 text-xl md:text-6xl font-bold">
          Power of 3D Object
        </h1>
        <h2
          color="black"
          className="mt-[1rem] md:mt-[4rem] mb-12 md:max-w-full lg:max-w-xl z-10 md:ml-[7rem] font-medium text-base leading-relaxed"
        >
          Forget flat visuals! 3D objects are revolutionizing websites, bringing products to life with stunning realism and boosting user engagement. This immersive experience translates to higher conversion rates, making your website a sales powerhouse.
        </h2>
      </div>
    </div>
    </>
  );
}
export default Hero;
