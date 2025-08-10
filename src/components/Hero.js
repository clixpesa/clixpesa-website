import React, { useState, useEffect } from "react"
import AppScrnShot from "../images/AppScrnCropped.png"
import AppUssd from "../images/UssdCropped.png"
import PlayStore from "../images/playstore.png"

export default function Hero() {
  const cycleList = ["everyone!", "you", "your aunt", "your grandma", "your gandpa", "your uncle"]
  const [cycleIdx, setCycleIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleIdx(idx => (idx + 1) % cycleList.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-teal-50">
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-8 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5 md:px-8 text-center lg:text-left">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-4 py-px mb-4 text-xs font-semibold tracking-wider text-teal-800 uppercase rounded-full bg-teal-100">
                We Are Here!!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Making money and crypto <br className="hidden md:block" />
              simple for <span className="inline-block text-teal-600">{cycleList[cycleIdx]}</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A borderless, customer-centric, all in one platform that feels and looks personal and
              familiar, to serve as a trusted companion for financial resilience
            </p>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-700">
              Join Shiro, Kevo and 2,900 others by getting the app!
            </p>
          </div>
          <div className="flex flex-col w-full mb-4 md:flex-row md:w-5/6 justify-center items-center text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.clixpesa.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-center w-1/2 h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:whitespace-nowrap md:w-auto focus:shadow-outline focus:outline-none mb-2 md:mb-0 md:mr-2 justify-center"
            >
              <img src={PlayStore} alt="Play Store" className="w-full h-14" />
            </a>
            <a
              href="https://github.com/clixpesa/mint-wallet/releases/download/v2.0.4/Clixpesa_v22_2.0.4.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-center w-1/2 h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:whitespace-nowrap md:w-auto bg-teal-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none justify-center"
            >
              Download our App
            </a>
          </div>
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
