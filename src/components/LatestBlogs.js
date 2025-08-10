import React from "react"
import ChamaImg from "../images/pexels-chama-3810756.jpg"
import AfroMoneyImg from "../images/pexels-nyau-mimi.jpg"
import BodaaImg from "../images/bodaa.jpg"

export default function LatestBlogs() {
  return (
    <div
      id="blogs"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
            some updates
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24" />
            </svg>
            <span className="relative">From</span>
          </span>{" "}
          our latest blogs
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-t-3xl">
          <a href="/" aria-label="Article">
            <img
              src={ChamaImg}
              className="object-cover w-full h-56 rounded"
              alt="chama-discussing"
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">23 Aug 2022</p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-teal-700 transition-colors duration-200 hover:text-teal-500"
            >
              <p className="text-2xl font-bold leading-5">Chamas on the blockchain</p>
            </a>
            <p className="mb-4 text-gray-700">
              A Chama is a “rotating savings and credit association” (ROSCA). In Kenya, many
              participate in one of these groups - typically made up of family or friends.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-teal-700 transition-colors duration-200 hover:text-teal-500 group"
              >
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-700 transition-colors duration-200 group-hover:text-teal-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p className="font-semibold">1.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-teal-700 transition-colors duration-200 hover:text-teal-500 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-teal-700 transition-colors duration-200 group-hover:text-teal-500"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">77</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-t-3xl">
          <a href="/" aria-label="Article">
            <img src={AfroMoneyImg} className="object-cover w-full h-56 rounded" alt="" />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">11 Aug 2022</p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-teal-700 transition-colors duration-200 hover:text-teal-500"
            >
              <p className="text-2xl font-bold leading-5">DeFi and African money</p>
            </a>
            <p className="mb-4 text-gray-700">
              The finance sector has enjoyed and will continue to enjoy the benefits of blockchain
              technology. Safe to say this is “The First Mover Advantage”
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-teal-700 transition-colors duration-200 hover:text-teal-500 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-700 transition-colors duration-200 group-hover:text-teal-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p className="font-semibold">1.7K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-teal-700 transition-colors duration-200 hover:text-teal-500 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-teal-700 transition-colors duration-200 group-hover:text-teal-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-t-3xl">
          <a href="/" aria-label="Article">
            <img src={BodaaImg} className="object-cover w-full h-56 rounded" alt="" />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">28 Jul 2022</p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-teal-700 transition-colors duration-200 hover:text-teal-500"
            >
              <p className="text-2xl font-bold leading-5">DeFi loans for BodaBoda riders</p>
            </a>
            <p className="mb-4 text-gray-700">
              Despite the high prices of buying a bike through hire purchase, the arrangement is
              wildly popular in the bodaboda industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-teal-700 transition-colors duration-200 hover:text-teal-500 group"
              >
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-700 transition-colors duration-200 group-hover:text-teal-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p className="font-semibold">1.1K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-teal-700 transition-colors duration-200 hover:text-teal-500 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-teal-700 transition-colors duration-200 group-hover:text-teal-500"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">121</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
