"use client";

export default function SignUpPage() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Create Your Account
        </h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <a href="/signin" className="text-green-500 font-medium hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}