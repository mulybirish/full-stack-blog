import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

function FeaturedPosts() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 bg-white/30 backdrop-blur-lg p-4 rounded-3xl">
      {/* first post /biggest post*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        {/* image */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />
        {/* details  */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg"> Wed Design</Link>
          <span className="text-gray-500">2 hours ago</span>
        </div>
        {/* title  */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          What is gonna happen with Mulugeta ?
        </Link>
      </div>
      {/* other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title  */}
          <div className="w-2/3 ">
            {/* detatils  */}
            <div className="flex gap-4 items-center text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800 "> Wed Design</Link>
              <span className="text-gray-500">2 hours ago</span>
            </div>
            {/* title  */}
            <div className="">
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2lg lg:text-xl xl:text-2xl font-medium"
              >
                What is gonna happen with Mulugeta ?
              </Link>
            </div>
          </div>
        </div>

        {/* third  */}
        <div className="lg:h-1/3 flex justify-between gap-4 rounded-3xl">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title  */}
          <div className="w-2/3 ">
            {/* detatils  */}
            <div className="flex gap-4 items-center text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800 "> Wed Design</Link>
              <span className="text-gray-500">2 hours ago</span>
            </div>
            {/* title  */}
            <div className="">
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2lg lg:text-xl xl:text-2xl font-medium"
              >
                What is gonna happen with Mulugeta ?
              </Link>
            </div>
          </div>
        </div>
        {/* forth  */}
        <div className="lg:h-1/3 flex justify-between gap-4  rounded-3xl">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title  */}
          <div className="w-2/3 ">
            {/* detatils  */}
            <div className="flex gap-4 items-center text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800 "> Wed Design</Link>
              <span className="text-gray-500">2 hours ago</span>
            </div>
            {/* title  */}
            <div className="">
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2lg lg:text-xl xl:text-2xl font-medium"
              >
                What is gonna happen with Mulugeta ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
