"use client";
import Image from "next/image";
export default function Profile() {
  return (
    <div className="flex flex-col flex-grow w-full px-32 py-10 items-center bg-gray-100">
      <div className="shadow-lg rounded-lg bg-white px-6 py-8">
        <div className="flex gap-8 px-14 w-full items-center justify-between">
          <div className="flex gap-8">
            <div className="relative">
              <Image
                src="/home.jpg"
                alt="profile"
                width={400}
                height={400}
                className="rounded-full object-cover h-44 w-44 border-4 border-green-500"
              />
              <button className="absolute bottom-3 right-3 bg-green-500 rounded-full p-2 hover:scale-105">
                <Image
                  src="/profile/camera.svg"
                  alt="edit"
                  width={30}
                  height={30}
                  className=""
                />
                <span className="absolute  bottom-6 right-7 font-bold text-2xl text-white">
                  +
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-5 my-auto">
              <h1 className="text-4xl">FirstName LastName</h1>
              <p className="text-2xl">email@gmail.com</p>
            </div>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-600 hover:scale-105 py-3 px-8 text-white rounded-xl font-medium text-lg">
              My causes
            </button>
          </div>
        </div>
        <div className="my-5 px-14">
          <h1 className="text-3xl">About me</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            libero sit amet quam tincidunt vehicula. Sed sit amet mi sed nunc
            tincidunt ultricies. Nullam nec nunc nec nunc ultricies ultricies.
            Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec
            nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies
            ultricies. Nullam nec nunc nec nunc ultricies ultricies. Nullam nec
            nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc
            ultricies ultricies.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-5 px-14">
          <h1 className="text-3xl">Edit profile information</h1>
          <div className="flex w-full gap-16">
            <form action="" className="w-2/3">
              <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-1/2">
                  First Name
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
                <label htmlFor="" className="w-1/2">
                  Last Name
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
              </div>
              <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-1/2">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
                <label htmlFor="" className="w-1/2">
                  Phone
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
              </div>
                <div className="w-full flex justify-center">
                    <button
                    type="submit"
                    className="px-10 bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600 transition hover:scale-105"
                    >
                    Save changes
                    </button>
                </div>
            </form>
            <form action="" className="w-1/3">
                <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                  Previous password
                  <input
                    type="password"
                    name="previous-password"
                    placeholder="Previous password"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
                </div>
                <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                    New password
                  <input
                    type="password"
                    name="new-password"
                    placeholder="New password"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
                </div>
                <div className="flex justify-center w-full">
                <button
                    type="submit"
                    className="px-10 bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600 transition hover:scale-105"
                    >
                    Change password
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
