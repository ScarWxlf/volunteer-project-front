"use client";
import CauseCard from "@/components/causeCard/causeCard";

export default function CausesPage() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="w-full flex flex-col justify-center items-center py-10 sm:py-20 bg-gray-100">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold my-5 sm:my-10 text-center px-4 sm:px-0">
          Donate Today: Save a Life
        </h1>
        <p className="w-full max-w-2xl text-center text-sm sm:text-base lg:text-lg px-6 sm:px-0">
          Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac
          suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a.
          Vitae et fusce purus consectetur.
        </p>
      </div>
      <div className="w-full px-4 lg:px-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5">
          Filters
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-3 w-full">
          <div className="flex flex-col bg-gray-100 p-4 rounded-2xl">
            <h1 className="text-base sm:text-lg lg:text-xl">Emergency</h1>
            <label className="inline-flex items-center mt-2 relative">
              <input
                type="checkbox"
                className="peer appearance-none h-5 w-5 text-green-600"
                name="emergency"
              />
              <span className="absolute h-5 w-5 rounded-xl border transition-all duration-500 border-black peer-checked:bg-green-500 peer-checked:border-none"></span>
              <span className="absolute h-2.5 w-2.5 rounded-xl left-[5px] transition-all duration-500 peer-checked:bg-white"></span>
              <span className="ml-2 text-sm sm:text-base">Yes</span>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:px-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-10">
          All Causes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 my-8 place-items-center">
          <CauseCard />
          <CauseCard />
          <CauseCard />
          <CauseCard />
          <CauseCard />
        </div>
      </div>
    </div>
  );
}
