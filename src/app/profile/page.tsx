"use client";
import Image from "next/image";
export default function Profile() {
  return (
    <div className="flex flex-grow w-full px-32 py-10 bg-gray-100 gap-5">
      <div className="bg-white rounded-xl shadow-lg w-1/5 fixed py-8 px-5">
        <div className="flex flex-col gap-5">
          <a href="#about-me" className="hover:text-green-500">
            About me
          </a>
          <a href="#account-name" className="hover:text-green-500">
          Account Name
          </a>
          <a href="#edit-profile" className="hover:text-green-500">
            Edit Profile
          </a>
          <a href="#change-password" className="hover:text-green-500">
            Change Password
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-4/5  ml-[25%]">
        <div id="about-me" className="w-full shadow-lg rounded-lg bg-white p-10">
          <div className="flex gap-8 w-full items-center justify-between">
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
          <div className="my-5">
            <h1 className="text-3xl">About me</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget libero sit amet quam tincidunt vehicula. Sed sit amet mi sed
              nunc tincidunt ultricies. Nullam nec nunc nec nunc ultricies
              ultricies. Nullam nec nunc nec nunc ultricies ultricies. Nullam
              nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc
              ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.
              Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec
              nunc ultricies ultricies.
            </p>
          </div>
        </div>
        <div
          id="account-name"
          className="w-full shadow-lg rounded-lg bg-white p-10"
        >
          <div className="flex gap-10">
            <div className="w-2/5">
              <h1 className="text-3xl font-bold mb-3">Account name</h1>
              <p>
                Update your first and last name to help people recognize you.
              </p>
            </div>
            <form action="" className="w-3/5 px-10 py-3">
              <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                <p className="mb-1"> First Name</p>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
                </div>
                <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                <p className="mb-1"> Last Name</p>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
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
          </div>
        </div>
        <div
          id="edit-profile"
          className="w-full shadow-lg rounded-lg bg-white p-10"
        >
          <div className="flex gap-10">
          <div className="w-2/5">
              <h1 className="text-3xl font-bold mb-3">Edit profile</h1>
              <p>
                Update your email and phone number to help secure your account.
              </p>
          </div>
            <form action="" className="w-3/5 px-10 py-3">
              <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                <p className="mb-1"> Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </label>
                </div>
                <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                <p className="mb-1"> Phone</p>
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
          </div>
        </div>
        <div
          id="change-password"
          className="w-full shadow-lg rounded-lg bg-white p-10"
        >
          <div className="flex gap-10">
            <div className="w-2/5">
              <h1 className="text-3xl font-bold mb-3">Change password</h1>
              <p>
                We recommend that you periodically update your password to help
                prevent unauthorized access to your account.
              </p>
            </div>
            <form action="" className="w-3/5 px-10 py-3">
              <div className="flex w-full mb-4 gap-5">
                <label htmlFor="" className="w-full">
                 <p className="mb-1">Previous password</p>
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
                <p className="mb-1">New password</p>
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
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
