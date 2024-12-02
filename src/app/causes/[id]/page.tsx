"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SimilarCauseCard from "@/components/causeCard/similarCauseCard";
import PaymentForm from "./paymentForm";
export default function DetailsPage() {
  const goal = 1000;
  const raised = 458;
  const donations = 14;
  const progress = (raised / goal) * 100;

  const [amount, setAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<number>(0);

  const displayedAmount = amount === 1 ? customAmount : amount;
  return (
    <div className="flex flex-col px-32 my-8">
      <div>
        <Link className="text-gray-500" href="/">
          Home
        </Link>
        <span className="mx-2">{">"}</span>
        <Link href="/causes">Causes</Link>
      </div>
      <h1 className="text-5xl font-bold my-5">There is title</h1>
      <div className="flex gap-4">
        <div className="w-2/3">
          <Image className="w-full rounded-3xl" layout="responsive" src="/home.jpg" alt="title" width={0} height={0}/>
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
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value === "") return setCustomAmount(0);
                  setCustomAmount(Number(target.value));
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
          <PaymentForm />
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
          <div className="flex justify-between w-full p-5 items-center">
            <h1 className="text-2xl font-bold">
              Donation Total:{" "}
              <span className="text-green-500">${displayedAmount}</span>
            </h1>
            <button
              onClick={() => {
                console.log(displayedAmount);
              }}
              className="bg-green-500 text-white text-lg font-bold rounded-3xl px-12 py-4 transition-transform transform hover:scale-105 hover:bg-green-600"
            >
              DONATE NOW
            </button>
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold">Desctiprion</h1>
            <p className="my-4">
              Urna velit pharetra pellentesque magna eget. Ut egestas est id
              netus. Facilisis mollis morbi ultrices ac tellus vitae pulvinar.
              Egestas sagittis nec et arcu enim ac. Vivamus a dignissim nulla
              ornare sit aliquam elementum blandit. Leo in sem pellentesque
              viverra malesuada viverra eget aliquam. Diam mi dolor adipiscing
              pellentesque nec at. Ut nisi faucibus ultrices etiam tortor vitae
              eros. Nec laoreet felis egestas ultrices a quis turpis sit. Eget
              semper commodo pellentesque eget orci tincidunt commodo facilisi
              ultricies. Nec mi in augue dolor sit convallis habitant ut
              accumsan. Ultrices neque diam id aliquam lobortis est faucibus
              sed. Dolor nibh arcu ornare mi donec suspendisse nisl nullam.
            </p>
            <Image
              src="/home.jpg"
              alt="title"
              layout="responsive"
              width={0}
              height={0}
              className="rounded-2xl"            
            />
            <p className="my-4">
              Nunc tortor et a ornare et placerat. Tellus in ultricies risus
              accumsan turpis id nam. Maecenas proin sodales diam vel mauris
              facilisis arcu semper. Mi accumsan gravida dignissim turpis
              sollicitudin. At auctor sed facilisi massa amet. Est morbi aliquam
              sed orci. Pulvinar aliquam sed egestas tempus aliquet
              sollicitudin. Lectus et rhoncus venenatis interdum lectus nam.
              Amet curabitur cursus pulvinar nisl id morbi adipiscing. Nunc eget
              arcu enim ac pellentesque integer bibendum augue. Ut amet tortor
              auctor hendrerit. Massa at amet nisl mauris vulputate. Accumsan
              quis vel habitasse arcu nisi sed. Pharetra malesuada velit iaculis
              urna eu. Luctus lobortis lacus metus nec ullamcorper. Arcu nisl
              odio elit nunc. Arcu amet imperdiet cras volutpat. Facilisis
              euismod bibendum urna eu feugiat. Et morbi mauris ultrices massa
              tellus purus suspendisse nec. Magnis tempor aliquam elementum
              imperdiet posuere. Quis arcu ultricies id quisque leo pulvinar
              augue sit. Arcu ultricies malesuada lectus nulla est nunc integer
              pellentesque magna. Egestas malesuada faucibus arcu nunc elit leo
              quis interdum. Ac vel in commodo accumsan mollis cras massa
              posuere eget. Condimentum posuere velit cras velit tortor
              ridiculus sit. Lectus augue libero etiam sed nisl.
            </p>
          </div>
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
