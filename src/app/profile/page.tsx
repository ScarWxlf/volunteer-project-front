"use client";
import Image from "next/image";
import useHash from "../../hooks/useHash";

export default function Profile() {
  const hash = useHash();
  return (
    <div className="flex flex-grow w-full px-32 py-10 bg-gray-100 gap-5">
      <div className="bg-white rounded-xl shadow-lg w-[25%] fixed p-5 left-12">
        <div className="flex flex-col gap-5">
          <a
            href="#about-me"
            className="flex gap-2 hover:text-green-600 text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${hash === "#about-me" ? "green" : "currentColor"}`}
              className="bi bi-file-earmark-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
            </svg>
            About me
          </a>
          <a
            href="#account-name"
            className="flex gap-2 hover:text-green-600 text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${hash === "#account-name" ? "green" : "currentColor"}`}
              className="bi bi-person-bounding-box"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
            Account Name
          </a>
          <a
            href="#edit-profile"
            className="flex gap-2 hover:text-green-600 text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${hash === "#edit-profile" ? "green" : "currentColor"}`}
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            Edit Profile
          </a>
          <a
            href="#change-password"
            className="flex gap-2 hover:text-green-600 text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${hash === "#change-password" ? "green" : "currentColor"}`}
              className="bi bi-key-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            Change Password
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-4/5  ml-[25%]">
        <div
          id="about-me"
          className="w-full shadow-lg rounded-lg bg-white p-10"
        >
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
            <form action="" className="w-3/5 px-20 py-3">
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
            <form action="" className="w-3/5 px-20 py-3">
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
            <form action="" className="w-3/5 px-20 py-3">
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
