import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import Min from '../../assets/11.png';
import Share from '../../assets/share.png';
import { Link } from 'react-router-dom';

function Signin() {
  const [isToggled, setIsToggled] = useState(true); // Always toggled by default

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="relative bg-[#F9F9F9] px-12 py-20 border border-gray-200 sm:rounded-lg sm:px-16 sm:py-24 sm:max-w-[500px] w-full min-h-[600px]">
        {/* Top-left background image */}
        <img
          src={Min}
          alt="Top left decoration"
          className="absolute top-0 left-[-2em] w-[8em] h-38 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Bottom-right background image */}
        <img
          src={Min}
          alt="Bottom right decoration"
          className="absolute bottom-0 right-[-3em] w-[10em] h-38 transform translate-x-1/2 translate-y-1/2"
        />

        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <h1 className="text-[25px]">Welcome to</h1>
              <p className="text-[35px]">CENTRL.</p>
              <p className="text-[24px] text-gray-400">Sign in or sign up below</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-[23px] font-normal text-gray-400">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <Link to="/home" className="text-[#0095F6] hover:underline"> 
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#0095F6] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
              </Link>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div className="relative flex justify-center text-sm/6 font-medium">
                <span className="px-6 text-gray-900">Or</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm/6 font-semibold">Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Text at the bottom left outside the card */}
      <div className="absolute bottom-0 left-0 px-4 py-2 text-sm text-gray-600">
        <div className="flex items-center space-x-4 mt-4">
          <img
            alt=""
            src={Share}
            className="h-4 w-auto object-contain" // Reduced size of the image
          />

          <p className="text-[18px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3EA969] via-[#9374D5] to-[#FBB123]">
            Events worth <br /> your time
          </p>
        </div>
      </div>

      {/* Switch at bottom-right */}
      <div className="absolute bottom-4 right-4">
        <Switch
          checked={isToggled}
          onChange={setIsToggled}
          className={`${
            isToggled ? 'bg-[#F87400]' : 'bg-gray-300'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              isToggled ? 'translate-x-5' : 'translate-x-0'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Signin;
