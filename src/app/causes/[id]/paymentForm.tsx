'use client';
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function PaymentForm(){
  const [amount, setAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');
  const customAmountInputRef = useRef<HTMLInputElement>(null);

  const displayedAmount = amount === 1 ? customAmount : amount;

  const handleSetAmount = (value: number) => {
    setAmount(value);
    if (value === 1) {
      customAmountInputRef.current?.focus();
      return;
    }
    setCustomAmount("");
  }
    return(
      <div className="w-full">
        <div className="w-full">
            <h1 className="text-2xl font-bold w-2/3 p-5">Donation amount</h1>
            <div className="flex flex-wrap w-full lg:w-2/3 p-5">
              {[10, 25, 50, 100, 500, 1].map((value) => {
                const isActive = amount === value;
                return (
                  <label
                    key={value}
                    className="relative inline-flex items-center justify-center px-5 py-2 m-1 cursor-pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="amount-highlight"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute inset-0 bg-green-600 rounded-md z-0"
                      />
                    )}
                    <input
                      className="hidden"
                      type="radio"
                      name="amount"
                      value={value}
                      onChange={() => handleSetAmount(value)}
                    />
                    <span
                      className={`relative z-10 font-medium ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      {value === 1 ? "Custom" : `$${value}`}
                    </span>
                  </label>
                );
              })}
            </div>
            <div className={`relative w-44 ml-4`}>
              <input
                ref={customAmountInputRef}
                value={customAmount}
                onClick={() => {
                  setAmount(1);
                }}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value === "") return setCustomAmount('');
                  setCustomAmount(target.value);
                }}
                type="number"
                name="customAmount"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full font-bold mt-2 p-4 text-center rounded-full text-xl bg-gray-100"
                placeholder="0"
                style={{
                  width: `${Math.max(150, customAmount.toString().length * 20)}px`,
                }}
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
        <div className="w-full">
            <form className="flex flex-wrap gap-3 w-full p-5">
              <label className="relative w-full flex flex-col">
                <span className="font-bold mb-3">Card number</span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_number"
                  placeholder="0000 0000 0000"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </label>

              <label className="relative flex-1 flex flex-col">
                <span className="font-bold mb-3">Expire date</span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="expire_date"
                  placeholder="MM/YY"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </label>

              <label className="relative flex-1 flex flex-col">
                <span className="font-bold flex items-center gap-3 mb-3">
                  CVC/CVV
                  <span className="relative group">
                    <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                      {" "}
                      Hey ceci est une infobulle !
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_cvc"
                  placeholder="&bull;&bull;&bull;"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </label>
            </form>
        </div>
        <div className="w-full p-5">
            <h1 className="text-2xl font-bold">Personal Information</h1>
            <div className="w-full flex justify-between gap-10 mt-5 font-medium">
              <label htmlFor="firstname" className="flex flex-col w-1/2">
                First Name
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className="w-full p-2 mt-2 rounded-xl bg-gray-100 font-normal"
                />
              </label>
              <label htmlFor="lastname" className="flex flex-col w-1/2">
                Last Name
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="w-full p-2 mt-2 rounded-xl bg-gray-100 font-normal"
                />
              </label>
            </div>
            <label htmlFor="email" className="flex flex-col font-medium mt-3">
              Email Address
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-2 mt-2 rounded-xl bg-gray-100 font-normal"
              />
            </label>
          </div>
          <div className="flex flex-col min-[500px]:flex-row justify-between w-full p-5 max-[500px]:gap-4 min-[500px]:items-center">
            <h1 className="text-2xl font-bold">
              Donation Total:{" "}
              <span className="text-green-500">${displayedAmount || 0}</span>
            </h1>
            <button
              onClick={() => {
                console.log(displayedAmount);
              }}
              className="bg-green-500 text-white text-lg font-bold rounded-3xl max-[550px]:px-5 px-12 py-4 transition-transform transform hover:scale-105 hover:bg-green-600"
            >
              DONATE NOW
            </button>
          </div>
      </div>
    )
}