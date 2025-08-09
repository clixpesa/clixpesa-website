import React from "react"
import AppScrnShot from "../images/AppScrnCropped.png"
import AppUssd from "../images/UssdCropped.png"
import PlayStore from "../images/google-play-badge.png"

export default function Hero() {
  return (
    <div className="bg-teal-50">
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-8 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5 md:px-8">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-4 py-px mb-4 text-xs font-semibold tracking-wider text-teal-800 uppercase rounded-full bg-teal-100">
                We Are Here!!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Making money and crypto <br className="hidden md:block" />
              simple for <span className="inline-block text-teal-600">everyone</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A borderless, customer-centric, all in one platform that feels and looks personal and
              familiar, to serve as a trusted companion for financial resilience
            </p>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-700 ">
              Join Shiro, Kevo and 2,900 others by getting the app!
            </p>
          </div>
          <form className="flex flex-col w-full mb-4 md:flex-row md:w-5/6">
            <input
              placeholder="+254712345678"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-teal-600 transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-3 md:mb-0 focus:border-teal-600 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:whitespace-nowrap md:w-auto bg-teal-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
            >
              Get the App
            </button>
          </form>
        </div>
        <div className="flex flex-row items-end">
          <img
            src={AppUssd}
            className="flex-inline aliobject-bottom hidden w-auto mx-auto lg:h-80 lg:flex"
            alt=""
          />
          <img
            src={AppScrnShot}
            className="flex-inline object-cover object-top w-full h-72 mx-auto lg:h-auto xl:mr-24 md:max-w-xs"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
