import Image from "next/image";

export default function WelcomeSection() {
  const donations = 1200345;
  const volunteers = 345;

  return (
    <div className="w-full relative cursor-default">
      <img
        src="/home.jpg"
        alt="home"
        className="w-full h-[500px] object-cover brightness-[.5]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold w-9/12  gap-6 flex flex-col">
        <h1 className="text-8xl">
          Give Hope, <br />
          Save Lives
        </h1>
        <p className="w-1/2">
          Libero mauris sed sed proin. Blandit aliquet ipsum faucibus dictum
          natoque arcu. Potenti ante sed in amet massa aliquet. Enim dui urna
          mauris volutpat
        </p>
        <div className="flex gap-12 text-2xl text-green-500 relative">
          <p>
            ${donations.toLocaleString("en-US").replace(/,/g, " ")}{" "}
            <span className="text-white">Donations</span>
          </p>
          <p>
            {volunteers.toLocaleString("en-US").replace(/,/g, " ")}{" "}
            <span className="text-white">People Helped</span>
          </p>
          <div className="absolute w-1/2 h-full bg-black opacity-25 blur-[6px] z-[-1]"></div>
        </div>
        <div className="flex gap-6">
          <Image src="/welcomeLogos/1.svg" alt="logo1" width={90} height={90} />
          <Image src="/welcomeLogos/2.svg" alt="logo2" width={90} height={90} />
          <Image src="/welcomeLogos/3.svg" alt="logo3" width={90} height={90} />
          <Image src="/welcomeLogos/4.svg" alt="logo4" width={90} height={90} />
        </div>
      </div>
    </div>
  );
}
