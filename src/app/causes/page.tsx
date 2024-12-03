"use client";
import CauseCard from "@/components/causeCard/causeCard";

const logoCards = [
  {
    title: "Education",
    desc: "Fermentum nisl accumsan nisi sapien in vitae",
    icon: '/causesLogos/1.svg'
  },
  {
    title: "Clean Water",
    desc: "Ultricies lacus turpis proin tempor faucibus",
    icon: '/causesLogos/2.svg'
  },
  {
    title: "Health Care",
    desc: "Adipiscing in vitae necposue eget fringilla a morbi",
    icon: '/causesLogos/3.svg'
  },
  {
    title: "Local communities",
    desc: "Nunc tristique quis leo duis gravida volutpat vitae",
    icon: '/causesLogos/4.svg'
  },
];

export default function CausesPage() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl font-bold my-10">Donate Today: Save a Life</h1>
        <p className="w-2/5 text-center">
          Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac
          suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a.
          Vitae et fusce purus consectetur.
        </p>
      </div>
      <div className="w-full flex justify-between p-16 bg-gray-100">
        {logoCards.map((card, index) => (
          <div className="flex flex-col items-center gap-5 w-1/5 p-4 py-8 rounded-2xl bg-white" key={index}>
            <img src={card.icon} alt={card.title} />
            <h1 className="text-2xl font-bold">{card.title}</h1>
            <p className="text-center w-5/6">{card.desc}</p>
        </div>)
        )}
      </div>
      <div className="w-full">
        <h1 className="px-32 text-4xl font-bold mt-5">Filters</h1>
        <div className="flex px-32 mt-3 w-full">
          <div className="flex flex-col bg-gray-100 p-4 rounded-2xl">
            <h1 className="text-xl">Emergency</h1>
            <label className="inline-flex items-center mt-2 relative">
                <input
                  type="checkbox"
                  className="peer appearance-none h-5 w-5 text-green-600"
                  name="emergency"
                />
                <span className="absolute h-5 w-5 rounded-xl border transition-all duration-500 border-black peer-checked:bg-green-500 peer-checked:border-none"></span>
                <span className="absolute h-2.5 w-2.5 rounded-xl left-[5px] transition-all duration-500 peer-checked:bg-white"></span>
                <span className="ml-2">Yes</span>
              </label>
          </div>
        </div>
        <h1 className="text-4xl font-bold px-32 mt-10">All Causes</h1>
        <div className="grid grid-cols-3 gap-12 px-32 my-8 w-full place-items-center">
          <CauseCard/>
          <CauseCard/>
          <CauseCard/>
          <CauseCard/>
          <CauseCard/>
        </div>
      </div>
    </div>
  );
}
