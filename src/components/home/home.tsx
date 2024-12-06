import Image from "next/image";
import WelcomeSection from "./welcomeSection";
import CarouselSection from "./carouselSection";
import FadeInSection from "../fadeSection/fadeSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col">
      <WelcomeSection />
      <div className="flex mx-32 rounded-xl shadow-xl my-10">
        <div className="flex flex-col items-center w-1/3 p-10 text-center gap-2">
          <Image
            className="rounded-xl"
            src="/homeLogos/eating.svg"
            alt="volunteer"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Eating Well</h1>
          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligulauisque quis </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-10 text-center gap-2">
          <Image
            className="rounded-xl"
            src="/homeLogos/caring.svg"
            alt="volunteer"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Caring & Concern</h1>
          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligulauisque quis </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-10 text-center gap-2">
          <Image
            className="rounded-xl"
            src="/homeLogos/travel.svg"
            alt="volunteer"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Traveling</h1>
          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligulauisque quis </p>
        </div>
      </div>
      <CarouselSection />
      <FadeInSection className="w-full my-10">
      <div className="w-full flex items-center px-32">
        <Image
          className="w-2/5 rounded-xl"
          src="/banner.png"
          alt="volunteer"
          width={1000}
          height={1000}
        />
        <div className="w-3/5 p-10 lg:p-16 flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-tight">
            Be The Change You Wish To See In The World.
          </h1>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Welfare</h2>
            <p className="text-base">
              Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
              justo, quis tempor ligula. Ut quis consequat orci.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Schooling</h2>
            <p className="text-base">
              Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
              justo, quis tempor ligula. Ut quis consequat orci.
            </p>
          </div>
          <div className="flex mt-6">
            <Link href="/causes">
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      </FadeInSection>
      <div className="w-full flex flex-col items-center gap-10 px-32 mt-5 mb-20">
        <h1 className="text-6xl w-2/3 text-center font-medium">Let&apos;s talk if you have any questions
        </h1>
        <div className="flex gap-10">
          <div className="w-1/3">
            <Image className="w-full" src="/homeContactSection/leftarrow.svg" alt="contact1" width={100} height={100} />
          </div>
          <div className="w-1/3 relative">
            <Image className="w-full" src="/homeContactSection/center.svg" alt="contact2" width={100} height={100} />
            <div className="w-full h-full items-center top-2 left-2 flex absolute justify-center">
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition text-xl hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <Image className="w-full" src="/homeContactSection/rightarrow.svg" alt="contact2" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <div className="flex mx-32 my-10 relative
        h-56 bg-gradient-to-r from-green-500 to-green-400 rounded-xl shadow-xl
      ">
        <div className="flex rounded-xl shadow-xl w-full absolute -top-20 bg-white">

        <div className="flex flex-col items-center w-1/3 p-10 text-center gap-2">
          <Image
            className="rounded-xl"
            src="/homeLogos/eating.svg"
            alt="volunteer"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Eating Well</h1>
          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligulauisque quis </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-10 text-center gap-2">
          <Image
            className="rounded-xl"
            src="/homeLogos/caring.svg"
            alt="volunteer"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Caring & Concern</h1>
          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligulauisque quis </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-10 text-center gap-2">
          <Image
            className="rounded-xl"
            src="/homeLogos/travel.svg"
            alt="volunteer"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Traveling</h1>
          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligulauisque quis </p>
        </div>
        </div>
      </div> */}