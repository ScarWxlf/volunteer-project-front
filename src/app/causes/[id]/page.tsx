"use client";
import { useState } from "react";
import SimilarCauseCard from "@/components/causeCard/similarCauseCard";
import PaymentForm from "./paymentForm";
export default function DetailsPage() {
  const goal = 1000;
  const raised = 458;
  const donations = 14;
  const progress = (raised / goal) * 100;

  const [amount, setAmount] = useState(0);
  return (
    <div className="flex flex-col px-32 my-8">
      <h1 className="text-5xl font-bold my-5">There is title</h1>
      <div className="flex gap-4">
        <div className="w-2/3">
          <img className="w-full rounded-3xl" src="/home.jpg" alt="title" />
          <div className="h-4 w-full my-5 bg-gray-200 rounded-xl">
            <div
              className="h-4 bg-green-500 rounded-xl"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="text-2xl font-bold">Goal: ${goal}</p>
              <p>Raised: ${raised}</p>
            </div>
            <div className="text-end">
              <p className="text-2xl font-bold">{donations}</p>
              <p>donations</p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold w-2/3 p-5">Donation amount</h1>
            <div className="flex gap-6 w-2/3 p-5">
              <label
                className={`inline-flex items-center mt-2 border-2 border-black rounded-3xl px-5 py-2 hover:bg-green-500 hover:text-white hover:border-none hover:mx-[1.6px] ${
                  amount === 10 &&
                  "bg-green-600 text-white border-none mx-[1.6px]"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="amount"
                  value="10"
                  onChange={() => {
                    setAmount(10);
                  }}
                />
                <span className="">$10</span>
              </label>
              <label
                className={`inline-flex items-center mt-2 border-2 border-black rounded-3xl px-5 py-2 hover:bg-green-500 hover:text-white hover:border-none hover:mx-[1.6px] ${
                  amount === 25 &&
                  "bg-green-600 text-white border-none mx-[1.6px]"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="amount"
                  value="25"
                  onChange={() => {
                    setAmount(25);
                  }}
                />
                <span className="">$25</span>
              </label>
              <label
                className={`inline-flex items-center mt-2 border-2 border-black rounded-3xl px-5 py-2 hover:bg-green-500 hover:text-white hover:border-none hover:mx-[1.6px] ${
                  amount === 50 &&
                  "bg-green-600 text-white border-none mx-[1.6px]"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="amount"
                  value="50"
                  onChange={() => {
                    setAmount(50);
                  }}
                />
                <span className="">$50</span>
              </label>
              <label
                className={`inline-flex items-center mt-2 border-2 border-black rounded-3xl px-5 py-2 hover:bg-green-500 hover:text-white hover:border-none hover:mx-[1.6px] ${
                  amount === 100 &&
                  "bg-green-600 text-white border-none mx-[1.6px]"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="amount"
                  value="100"
                  onChange={() => {
                    setAmount(100);
                  }}
                />
                <span className="">$100</span>
              </label>
              <label
                className={`inline-flex items-center mt-2 border-2 border-black rounded-3xl px-5 py-2 hover:bg-green-500 hover:text-white hover:border-none hover:mx-[1.6px] ${
                  amount === 500 &&
                  "bg-green-600 text-white border-none mx-[1.6px]"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="amount"
                  value="500"
                  onChange={() => {
                    setAmount(500);
                  }}
                />
                <span className="">$500</span>
              </label>
              <label
                className={`inline-flex items-center mt-2 border-2 border-black rounded-3xl px-5 py-2 hover:bg-green-500 hover:text-white hover:border-none hover:mx-[1.6px] ${
                  amount === 1 &&
                  "bg-green-600 text-white border-none mx-[1.6px]"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="amount"
                  value="1"
                  onChange={() => {
                    setAmount(1);
                  }}
                />
                <span className="">Custom</span>
              </label>
            </div>
            <div className={`relative w-[16%] ml-4`}>
              <input
                onClick={() => {
                  setAmount(1);
                }}
                type="number"
                name="customAmount"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full font-bold mt-2 p-4 text-center rounded-full text-xl bg-gray-100"
                placeholder="0"
              />
              <span className="absolute text-2xl font-bold w-full h-full left-5 top-1/3 pointer-events-none">
                $
              </span>
            </div>
          </div>
          <div className="p-5 w-full">
            <h1 className="text-2xl font-bold">Select Payment Method</h1>
            <div className="flex gap-5 text-lg mt-3">
              <label className="inline-flex items-center mt-2 relative">
                <input
                  type="radio"
                  className="form-radio appearance-none h-5 w-5 text-green-600 peer"
                  name="payment"
                />
                <span className="absolute  h-5 w-5 rounded-xl border transition-all duration-500 border-black peer-checked:bg-green-500 peer-checked:border-none"></span>
                <span className="absolute  h-2.5 w-2.5 rounded-xl left-[5px] transition-all duration-500 peer-checked:bg-white"></span>
                <span className="ml-2">Credit Card</span>
              </label>
              <label className="inline-flex items-center mt-2 relative">
                <input
                  type="radio"
                  className="form-radio peer appearance-none h-5 w-5 text-green-600"
                  name="payment"
                />
                <span className="absolute  h-5 w-5 rounded-xl border transition-all duration-500 border-black peer-checked:bg-green-500 peer-checked:border-none"></span>
                <span className="absolute  h-2.5 w-2.5 rounded-xl left-[5px] transition-all duration-500 peer-checked:bg-white"></span>
                <span className="ml-2">Pay Pal</span>
              </label>
            </div>
          </div>
          <PaymentForm/>
        </div>
        <div className="w-1/3">
          <div className="h-96 text-center text-2xl font-bold">
            There will be something (maybe)
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl font-bold">Similar Causes</h1>
            <SimilarCauseCard />
            <SimilarCauseCard />
            <SimilarCauseCard />
          </div>
        </div>
      </div>
    </div>
  );
}
