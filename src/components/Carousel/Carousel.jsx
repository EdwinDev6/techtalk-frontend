"use client";

import { Carousel } from "flowbite-react";

export function DefaultCarousel() {
  return (
    <div className="hidden md:block">
      <Carousel className="h-96 top-3 ">
        <img
          alt="img Hot Topic"
          src="https://i2.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Mano-humana-y-robo%CC%81tica-tocan-un-cerebro-digital-1.jpg?w=1280&ssl=1"
        />
        <img
          alt="img Hot Topic"
          src="https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Steve-Jobs-presenta-el-primer-iPhone-en-2007-1.jpg?w=1280&ssl=1"
        />
        <img
          alt="img Hot Topic"
          src="https://i2.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Mujer-immersa-en-videojuego-con-realidad-virtual.jpg?w=1280&ssl=1"
        />
        <img
          alt="img Hot Topic"
          src="https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80"
        />
        <img
          alt="img Hot Topic"
          src="https://i2.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Coche-auto%CC%81nomo-con-HUD-Head-Up-Display.-Vehi%CC%81culo-auto%CC%81nomo-en-las-calles-de-la-ciudad.png?w=1280&ssl=1"
        />
      </Carousel>
    </div>
  );
}
