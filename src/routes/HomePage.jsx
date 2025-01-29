import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";

function HomePage() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BreadCrumbs*/}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and articals</span>
      </div>
      {/* Introductiopn*/}
      <div className="flex items-center justify-between ">
        {/* titles */}
        <div className="">
          <h1 className="text-grey-400 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Quibusdam accusantium deleniti iure quisquam perferendis voluptatem,
            nihil omnis expedita harum saepe corporis, officia, consequatur.
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="hidden md:block relative">
          <button className=" rounded-full top-0 bottom-0 right-0 left-0  flex items-center justify-center bg-blue-800">
            <svg
              class="w-[98px] h-[98px] text-gray-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                id="circlepath"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </button>
        </Link>
      </div>
      {/* MainCategories*/}
      <MainCategories />
      {/* FeaturedPost*/}
      {/* PostList*/}
    </div>
  );
}

export default HomePage;
