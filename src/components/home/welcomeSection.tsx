import Image from "next/image";

export default function WelcomeSection() {
  const donations = 1200345;
  const volunteers = 345;

  return (
    <div className="w-full relative cursor-default">
      <Image
        src="/home.jpg"
        alt="home"
        width={1920}
        height={1080}
        className="w-full h-[500px] sm:h-[400px] lg:h-[600px] object-cover brightness-[.5]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold flex flex-col items-center lg:items-start gap-6 px-4 sm:px-10 lg:px-20 w-full lg:w-9/12">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl text-center lg:text-left">
          Give Hope, <br />
          Save Lives
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-center lg:text-left w-full lg:w-1/2">
          Libero mauris sed sed proin. Blandit aliquet ipsum faucibus dictum
          natoque arcu. Potenti ante sed in amet massa aliquet. Enim dui urna
          mauris volutpat
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-center lg:text-left text-lg sm:text-xl lg:text-2xl text-green-500 relative">
          <p>
            ${donations.toLocaleString("en-US").replace(/,/g, " ")}{" "}
            <span className="text-white">Donations</span>
          </p>
          <p>
            {volunteers.toLocaleString("en-US").replace(/,/g, " ")}{" "}
            <span className="text-white">People Helped</span>
          </p>
          <div className="absolute w-3/4 sm:w-1/2 h-full bg-black opacity-25 blur-[6px] z-[-1]"></div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          <Image src="/welcomeLogos/1.svg" alt="logo1" width={90} height={90} className="h-auto w-auto" />
          <Image src="/welcomeLogos/2.svg" alt="logo2" width={90} height={90} className="h-auto w-auto" />
          <Image src="/welcomeLogos/3.svg" alt="logo3" width={90} height={90} className="h-auto w-auto" />
          <Image src="/welcomeLogos/4.svg" alt="logo4" width={90} height={90} className="h-auto w-auto" />
        </div>
      </div>
    </div>
  );
}
