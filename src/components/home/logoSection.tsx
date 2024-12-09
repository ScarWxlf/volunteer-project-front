import Image from "next/image";

export default function HomeLogos() {
  return (
    <div className="flex flex-col mx-4 sm:mx-10 lg:mx-32 rounded-xl shadow-xl my-10">
      <div className="flex flex-wrap justify-center lg:justify-between">
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-6 text-center gap-4">
          <Image
            className="rounded-xl"
            src="/homeLogos/eating.svg"
            alt="eating"
            width={80}
            height={80}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Eating Well</h1>
          <p className="text-sm sm:text-base">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligulauisque quis.
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-6 text-center gap-4">
          <Image
            className="rounded-xl"
            src="/homeLogos/caring.svg"
            alt="caring"
            width={80}
            height={80}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Caring & Concern</h1>
          <p className="text-sm sm:text-base">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligulauisque quis.
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-6 text-center gap-4">
          <Image
            className="rounded-xl"
            src="/homeLogos/communities.svg"
            alt="communities"
            width={80}
            height={80}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Local Communities</h1>
          <p className="text-sm sm:text-base">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligulauisque quis.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between">
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-6 text-center gap-4">
          <Image
            className="rounded-xl"
            src="/homeLogos/education.svg"
            alt="education"
            width={80}
            height={80}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Education</h1>
          <p className="text-sm sm:text-base">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligulauisque quis.
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-6 text-center gap-4">
          <Image
            className="rounded-xl"
            src="/homeLogos/water.svg"
            alt="clean water"
            width={80}
            height={80}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Clean Water</h1>
          <p className="text-sm sm:text-base">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligulauisque quis.
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-6 text-center gap-4">
          <Image
            className="rounded-xl"
            src="/homeLogos/heal.svg"
            alt="health"
            width={80}
            height={80}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Health Care</h1>
          <p className="text-sm sm:text-base">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligulauisque quis.
          </p>
        </div>
      </div>
    </div>
  );
}
