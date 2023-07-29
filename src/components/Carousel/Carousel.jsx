import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useLocation } from "react-router-dom";
export function Carousel() {
  const slides = [
    {
      url: "https://i2.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Mano-humana-y-robo%CC%81tica-tocan-un-cerebro-digital-1.jpg?w=1280&ssl=1",
    },
    {
      url: "https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Steve-Jobs-presenta-el-primer-iPhone-en-2007-1.jpg?w=1280&ssl=1",
    },
    {
      url: "https://i2.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Mujer-immersa-en-videojuego-con-realidad-virtual.jpg?w=1280&ssl=1",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://i2.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Coche-auto%CC%81nomo-con-HUD-Head-Up-Display.-Vehi%CC%81culo-auto%CC%81nomo-en-las-calles-de-la-ciudad.png?w=1280&ssl=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  if (!isHomePage) {
    return null;
  }
  return (
    <div className="max-w-[50] h-[500px] w-90 m-auto py-16 px-10 relative group animate-fade-right animate-once animate-duration-[500ms] animate-ease-out">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
