"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


export default function SolarTrends() {
  return (
    <section>
      <div className="absolute -left-36 bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
        <img
          src="/assets/images/bulb.png"
          width={260}
          height={200}
          className="w-full h-full"
          alt="bulb"
        />
      </div>
      <div className="mt-12 p-5 ">
        <div className="grid grid-cols-12 gap-4 ">
         <div className="col-span-4 sm:col-span-2 my-32   ">
         <h1 className="text-xl font-bold text-yellow-500">Solar Products</h1>
         <p className="mt-2 text-sm text-zinc-400 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quas nesciunt modi totam maiores sint animi. Sunt accusamus non cum autem culpa dolorem alias impedit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quas nesciunt modi totam maiores sint animi. Sunt accusamus non cum autem culpa dolorem alias impedit.</p>
         </div>
         <div className="col-span-8 sm:col-span-10 ">
          {/* Swiper slideer begain in free mode  */}
          <Swiper
    
    slidesPerView={2}
    spaceBetween={30}
    freeMode={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: true,
    }}
    modules={[Pagination, FreeMode, Autoplay]}
    className=""
    
    >
      <SwiperSlide>
      
        {/* image div  */}
        <div className="">
        <img className="rounded-xl hover:scale-105 transition-all duration-700" src="/assets/images/f1.jpg" alt="bulb" />
        
        </div>
        {/* content div  */}
        <div>
        <h1 className="text-white text-xl font-bold mt-5">title</h1>
        <p className="text-sm text-zinc-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, dolore ad tempore impedit facere repellendus excepturi repellat recusandae, consectetur, quasi cum numquam. Harum sunt minima voluptatibus quam molestiae architecto rem voluptas, illo esse magni quas.</p>
        <div className="flex mt-5 w-full justify-center bg-black py-2 rounded-full">
          <button>Submit</button>
        </div>
        </div>
      
      </SwiperSlide>

      <SwiperSlide>
       <div>
        {/* image div  */}
        <div className="">
        <img className="rounded-xl hover:scale-105 transition-all duration-700" src="/assets/images/f2.jpg" alt="bulb" />
        <h1 className="text-white text-xl font-bold mt-5">title</h1>
        <p className="text-sm text-zinc-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, dolore ad tempore impedit facere repellendus excepturi repellat recusandae, consectetur, quasi cum numquam. Harum sunt minima voluptatibus quam molestiae architecto rem voluptas, illo esse magni quas.</p>
        <div className="flex mt-5 w-full justify-center bg-black py-2 rounded-full">
          <button>Submit</button>
        </div>
        </div>
        {/* content div  */}
       
       </div>
      </SwiperSlide>


      <SwiperSlide>
       <div>
        {/* image div  */}
        <div className="">
        <img className="rounded-xl hover:scale-105 transition-all duration-700" src="/assets/images/f3.jpg" alt="bulb" />
        <h1 className="text-white text-xl font-bold mt-5">title</h1>
        <p className="text-sm text-zinc-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, dolore ad tempore impedit facere repellendus excepturi repellat recusandae, consectetur, quasi cum numquam. Harum sunt minima voluptatibus quam molestiae architecto rem voluptas, illo esse magni quas.</p>
        <div className="flex mt-5 w-full justify-center bg-black py-2 rounded-full">
          <button>Submit</button>
        </div>
        </div>
        {/* content div  */}
       
       </div>
      </SwiperSlide>
      
      
    </Swiper>


         </div>
        </div>
      </div>
    </section>
  );
}

