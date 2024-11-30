"use clietn";
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
        <h1 className="text-4xl font-bold px-32 mt-20">All Causes</h1>
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
