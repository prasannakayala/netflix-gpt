import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="betflix-bg"
          className="h-[900px]"
        />
      </div>
      <form className="sm:w-6/12 bg-opacity-90 bg-black absolute p-12 text-white lg:w-4/12 my-36 mx-auto right-0 left-0 flex flex-col">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 text-gray-100 bg-transparent border border-1 border-gray-300 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-3 text-gray-100 bg-transparent border border-1 border-gray-300 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 m-3 text-gray-100 bg-transparent border border-1 border-gray-300 rounded-md"
        />
        <button className="py-3 m-2 cursor-pointer bg-red-700 text-white rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        {isSignInForm ? (
          <p className=" py-4" onClick={toggleSignInForm}>
            New to Netflix ? Sign Up Now
          </p>
        ) : (
          "Already Registered! Sign In Now!!"
        )}
      </form>
    </div>
  );
};

export default Login;
