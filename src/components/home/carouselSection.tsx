"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FadeInSection from "../fadeSection/fadeSection";

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  const titles = [
    "Support Our Soldiers",
    "Aid for Civilians",
    "Rebuild Ukraine",
  ];
  const slides = [
    "/carousel/soldier.webp",
    "/carousel/humanitarian.jpeg",
    "/carousel/rebuild.jpg",
  ];

  const texts = [
    "Stand with our defenders by contributing to essential supplies and equipment. Your donations help provide protective gear, medical kits, drones, vehicles, and other crucial resources for Ukrainian soldiers on the frontlines. Together, we can give them the tools they need to protect our freedom and homeland.",
    "Be a lifeline for civilians affected by the war. Your contributions provide food, medicine, temporary shelters, and basic necessities to families who have lost their homes and livelihoods. Let’s show compassion and support to those who need it most during these challenging times.",
    "Help rebuild what has been destroyed. Schools, hospitals, homes, and roads – everything that keeps communities thriving needs our attention. By donating to reconstruction efforts, you’re giving hope to countless Ukrainians who dream of returning to a safe and restored homeland.",
  ];

  useEffect(() => {
    if (!isManual) {
      const timer = setTimeout(nextSlide, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isManual]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full flex flex-col items-center lg:px-36 sm:px-14 px-8  relative">
      <button
          onClick={() => {
            setIsManual(true);
            prevSlide();
          }}
          className="absolute z-10 lg:left-32 sm:left-10 left-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600"
        >
          ❮
        </button>
        <button
          onClick={() => {
            setIsManual(true);
            nextSlide();
          }}
          className="absolute z-10 lg:right-32 sm:right-10 right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600"
        >
          ❯
        </button>
      <FadeInSection className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${slides.length * 34}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex sm:flex-row flex-col gap-5 items-center  px-10 py-5"
            >
              <div className="flex flex-col gap-3 sm:w-1/2 w-full sm:order-1 order-2">
                <Image
                  className="lg:w-10 lg::h-10 md:w-8 md:h-8 h-6 w-6"
                  src={"/carousel/``.svg"}
                  alt="beb"
                  width={40}
                  height={40}
                />
                <h1 className="lg:text-4xl sm:text-2xl text-xl font-bold">{titles[index]}</h1>
                <p className="lg:text-lg sm:text-md text-sm font-medium sm:text-ellipsis line-clamp-none sm:line-clamp-5 lg:line-clamp-5 xl:line-clamp-none">{texts[index]}</p>
              </div>
              <div className="sm:w-1/2 full sm:order-2 order-1">
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </FadeInSection>
    </div>
  );
}
