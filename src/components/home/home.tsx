import Image from "next/image";
import WelcomeSection from "./welcomeSection";
import CarouselSection from "./carouselSection";
import FadeInSection from "../fadeSection/fadeSection";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col">
      <WelcomeSection />
      <CarouselSection />
      <FadeInSection className="z-[-1]">
        <div className="flex justify-around w-full h-20 my-10">
          <Image src="homeLogos/1.svg" alt="logo1" width={120} height={120} />
          <Image src="homeLogos/2.svg" alt="logo1" width={120} height={120} />
          <Image src="homeLogos/3.svg" alt="logo1" width={120} height={120} />
          <Image src="homeLogos/4.svg" alt="logo1" width={120} height={120} />
          <Image src="homeLogos/5.svg" alt="logo1" width={120} height={120} />
        </div>
      </FadeInSection>
    </div>
  );
}
