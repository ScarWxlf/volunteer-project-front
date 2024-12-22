"use client";
import Image from "next/image";
import WelcomeSection from "./welcomeSection";
import CarouselSection from "./carouselSection";
import FadeInSection from "../fadeSection/fadeSection";
import HomeLogos from "./logoSection";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgRefRight = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = svgRef.current;
    const svgRight = svgRefRight.current;
    if (!svg || !svgRight) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          svgRight.classList.add("animate");
          svg.classList.add("animate");
        } else {
          svgRight.classList.remove("animate");
          svg.classList.remove("animate");
        }
      },
      { threshold: 0.5 }
    );

    if (svg) {
      observer.observe(svg);
    }

    if (svgRight) {
      observer.observe(svgRight);
    }

    return () => {
      if (svg) {
        observer.unobserve(svg);
      }
      if (svgRight) {
        observer.unobserve(svgRight);
      }
    };
  }, []);
  return (
    <div className="flex flex-grow flex-col">
      <WelcomeSection />
      <HomeLogos/>
      <CarouselSection />
      <FadeInSection className="w-full my-10">
        <div className="w-full flex sm:flex-row flex-col items-center gap-6 lg:gap-12 px-4 sm:px-8 lg:px-32">
          <Image
            className="sm:w-1/2 xl:w-2/5 rounded-xl"
            src="/banner.png"
            alt="volunteer"
            width={1000}
            height={1000}
          />
          <div className="w-full lg:w-3/5 p-6 xl:pr-12 flex flex-col gap-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug">
              Be The Change You Wish To See In The World.
            </h1>
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold mb-2">Welfare</h2>
              <p className="text-base">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo, quis tempor ligula. Ut quis consequat orci.
              </p>
            </div>
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold mb-2">Schooling</h2>
              <p className="text-base">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo, quis tempor ligula. Ut quis consequat orci.
              </p>
            </div>
            <div className="flex mt-4">
              <Link href="/causes">
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="w-full flex flex-col items-center sm:gap-10 px-4 sm:px-8 lg:px-32 mt-5 mb-20">
        <h1 className="text-4xl xl:text-6xl w-2/3 text-center font-medium">
          Let&apos;s talk if you have any questions
        </h1>
        <div className="flex sm:gap-10 w-full">
          <div className="w-1/4 sm:w-1/3 containerSvg">
            <svg
              className="squiggle w-full"
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width="427"
              height="182"
              viewBox="0 0 427 182"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M363.631 181.656C361.583 180.978 360.999 180.082 360.995 178.242C361.09 175.297 364.71 171.771 375.516 164.25C381.122 160.245 382.652 158.823 380.865 158.934C356.761 161.18 346.101 160.624 331.54 156.503C310.779 150.506 290.743 138.352 272.013 120.166L261.489 109.948L247.215 116.599C231.946 123.867 223.018 125.991 209.261 126.071C195.343 126.096 174.484 120.936 161.176 114.343C153.4 110.363 142.45 101.664 136.93 94.8426L131.605 88.4422L124.68 91.9212C115.027 96.7703 104.419 98.9513 89.297 99.1801C61.67 99.6463 38.3296 88.2476 14.7019 62.9112C2.02281 49.1707 -2.20078 41.2961 1.9973 39.1872C3.57492 38.3947 5.20976 39.5492 10.0439 44.7394C23.6747 59.3079 30.3044 65.7059 39.6655 72.8415C61.4434 89.496 91.8021 93.4343 117.831 82.9875L126.075 79.767L124.648 75.3601C117.992 54.7764 117.493 42.2847 122.983 25.981C129.197 7.4879 144.096 -1.0512 157.973 5.90877C162.862 8.30856 168.87 18.7025 169.983 26.6832C172.106 41.9088 162.117 63.6207 146.386 77.8356L140.715 83.0453L143.297 86.3528C151.884 97.6787 163.186 105.011 181.109 110.86C200.599 117.227 220.719 116.982 238.678 110.07C247.083 106.903 254.848 101.428 253.413 99.6378C252.937 98.9562 249.674 93.4954 246.191 87.6269C233.596 65.6893 229.448 40.9658 235.673 24.5604C239.182 15.3131 243.841 9.4227 251.186 4.94591C267.24 -4.69272 284.743 1.88577 291.503 20.3079C299.735 42.461 292.975 73.2002 275.158 95.2948C272.327 98.8264 270.186 102.129 270.448 102.651C271.556 104.857 285.344 117.906 292.91 123.834C314.153 140.757 337.02 149.38 360.392 149.343C368.054 149.429 392.538 146.607 394.731 145.505C395.359 145.19 392.318 143.569 387.899 142.105C369.037 135.155 355.464 126.2 355.56 120.626C355.804 114.844 360.964 115.417 373.215 122.54C378.212 125.422 391.19 130.59 403.804 134.769C415.741 138.634 425.819 142.497 426.188 143.232C426.558 143.967 426.722 145.861 426.403 147.327C425.987 149.897 424.41 150.957 406.788 159.809C396.24 165.242 382.811 172.507 376.93 175.997C367.593 181.743 365.961 182.428 363.605 181.636L363.631 181.656ZM274.622 77.1957C283.944 60.4232 286.578 37.6677 280.67 24.0752C277.028 15.5237 273.033 12.0047 266.944 11.9157C258.225 11.8248 248.306 20.8767 245.81 31.3399C244.296 37.7597 244.587 49.8371 246.592 59.5961C248.293 67.4151 256.773 85.8943 261.091 90.8244L263.09 93.2363L266.808 88.8733C268.851 86.4071 272.415 81.2013 274.608 77.2024L274.622 77.1957ZM147.33 60.3159C153.992 51.8457 159.373 38.4931 159.298 30.7781C159.177 19.8045 152.699 12.1416 145.134 13.8486C137.469 15.5892 130.52 31.0524 130.282 46.811C130.142 54.3658 132.215 67.9253 134.11 71.9634C134.902 73.5411 141.563 67.7005 147.323 60.336L147.33 60.3159Z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-2/3 sm:w-1/3 relative">
            <div className="flex items-center w-full h-full">
              <Image
                className="w-full"
                src="/homeContactSection/center.svg"
                alt="contact2"
                width={100}
                height={100}
              />
            </div>
            <div className="w-full h-full items-center top-1 left-1 sm:top-1 sm:left-1 md:top-2 md:left-2 flex absolute justify-center">
              <Link href="/contacts" className="w-full h-full flex justify-center items-center">
              <button className="w-[40%] sm:w-1/2 h-[14%] sm:h-1/6 md:h-1/5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition text-sm md:text-md lg:text-xl hover:scale-105">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
          <div className="w-1/4 sm:w-1/3 containerSvg">
            <svg
              className="squiggle w-full"
              ref={svgRefRight}
              xmlns="http://www.w3.org/2000/svg"
              width="427"
              height="183"
              viewBox="0 0 427 183"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M63.0363 1.19482C65.0851 1.87354 65.6688 2.76908 65.6722 4.6092C65.5774 7.55358 61.9577 11.0799 51.1522 18.601C45.5459 22.6061 44.0162 24.0276 45.8026 23.9172C69.9067 21.6709 80.5668 22.2266 95.128 26.3481C115.889 32.3451 135.925 44.4995 154.655 62.6853L165.179 72.9035L179.452 66.2525C194.721 58.9841 203.65 56.8596 217.407 56.7805C231.325 56.7547 252.184 61.9152 265.492 68.5082C273.268 72.4884 284.218 81.1869 289.738 88.0085L295.062 94.4089L301.988 90.9299C311.641 86.0808 322.249 83.8998 337.371 83.671C364.998 83.2047 388.338 94.6035 411.966 119.94C424.645 133.68 428.869 141.555 424.67 143.664C423.093 144.456 421.458 143.302 416.624 138.112C402.993 123.543 396.363 117.145 387.002 110.01C365.224 93.3551 334.866 89.4168 308.837 99.8636L300.592 103.084L302.019 107.491C308.676 128.075 309.175 140.566 303.685 156.87C297.471 175.363 282.572 183.902 268.695 176.942C263.806 174.543 257.797 164.149 256.685 156.168C254.562 140.942 264.551 119.23 280.282 105.015L285.952 99.8057L283.37 96.4983C274.784 85.1724 263.482 77.8396 245.559 71.9912C226.069 65.6238 205.949 65.8687 187.989 72.7808C179.584 75.948 171.82 81.4227 173.255 83.2133C173.731 83.8949 176.993 89.3557 180.477 95.2242C193.071 117.162 197.22 141.885 190.995 158.291C187.486 167.538 182.827 173.428 175.481 177.905C159.427 187.544 141.924 180.965 135.165 162.543C126.933 140.39 133.693 109.651 151.51 87.5563C154.34 84.0247 156.482 80.7218 156.22 80.2004C155.112 77.9943 141.323 64.945 133.758 59.0172C112.515 42.0941 89.6478 33.4713 66.2755 33.5081C58.6139 33.422 34.1296 36.2443 31.937 37.3458C31.3086 37.6615 34.3495 39.2818 38.7685 40.7457C57.6307 47.6964 71.2039 56.6511 71.1074 62.2251C70.8641 68.0069 65.7041 67.4343 53.4524 60.3108C48.4553 57.4294 35.4782 52.2609 22.8641 48.0821C10.9264 44.2167 0.848741 40.3545 0.479334 39.6192C0.109928 38.8838 -0.0541299 36.9904 0.264276 35.5244C0.680976 32.9541 2.25804 31.894 19.8793 23.042C30.4277 17.6091 43.8565 10.3441 49.7381 6.85362C59.0749 1.10846 60.7063 0.4229 63.063 1.2148L63.0363 1.19482ZM152.046 105.655C142.723 122.428 140.09 145.183 145.997 158.776C149.64 167.327 153.635 170.846 159.724 170.935C168.443 171.026 178.362 161.974 180.858 151.511C182.372 145.091 182.081 133.014 180.075 123.255C178.374 115.436 169.895 96.9568 165.577 92.0266L163.578 89.6148L159.859 93.9778C157.817 96.444 154.253 101.65 152.059 105.649L152.046 105.655ZM279.338 122.535C272.676 131.005 267.295 144.358 267.37 152.073C267.491 163.047 273.969 170.709 281.533 169.003C289.198 167.262 296.148 151.799 296.386 136.04C296.525 128.485 294.452 114.926 292.558 110.888C291.765 109.31 285.105 115.151 279.345 122.515L279.338 122.535Z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}