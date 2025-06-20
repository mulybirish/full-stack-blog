import React from "react";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import Image from "../components/Image";
import PostSideMenuActions from "../components/PostSideMenuActions";
import Search from "../components/Search";

function SinglePostPage() {
  return (
    <div>
      {/* details  */}
      <div className="flex flex-row gap-8">
        <div className="mb-20 lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-grey-400 text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos quidem voluptate quos
          </h1>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800" to="/test">
              John Doe
            </Link>
            <span>On</span>
            <Link className="text-blue-800" to="/test">
              Web design
            </Link>
            <span>2 hours ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            sint nemo quae! Voluptatibus laborum ab illum numquam facere?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content  */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex-col flex gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias, ea repudiandae ratione quaerat placeat autem, recusandae
            rem modi consequuntur dolorum dolor nemo accusantium voluptates
            labore repellat. Similique, cum repellat! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Beatae totam officiis iure ullam
            possimus magni dignissimos a quod laboriosam reprehenderit, esse sed
            inventore alias fuga repellendus sunt? A, ullam voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias, ea repudiandae ratione quaerat placeat autem, recusandae
            rem modi consequuntur dolorum dolor nemo accusantium voluptates
            labore repellat. Similique, cum repellat! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Beatae totam officiis iure ullam
            possimus magni dignissimos a quod laboriosam reprehenderit, esse sed
            inventore alias fuga repellendus sunt? A, ullam voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias, ea repudiandae ratione quaerat placeat autem, recusandae
            rem modi consequuntur dolorum dolor nemo accusantium voluptates
            labore repellat. Similique, cum repellat! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Beatae totam officiis iure ullam
            possimus magni dignissimos a quod laboriosam reprehenderit, esse sed
            inventore alias fuga repellendus sunt? A, ullam voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias, ea repudiandae ratione quaerat placeat autem, recusandae
            rem modi consequuntur dolorum dolor nemo accusantium voluptates
            labore repellat. Similique, cum repellat! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Beatae totam officiis iure ullam
            possimus magni dignissimos a quod laboriosam reprehenderit, esse sed
            inventore alias fuga repellendus sunt? A, ullam voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias, ea repudiandae ratione quaerat placeat autem, recusandae
            rem modi consequuntur dolorum dolor nemo accusantium voluptates
            labore repellat. Similique, cum repellat! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Beatae totam officiis iure ullam
            possimus magni dignissimos a quod laboriosam reprehenderit, esse sed
            inventore alias fuga repellendus sunt? A, ullam voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            molestias, ea repudiandae ratione quaerat placeat autem, recusandae
            rem modi consequuntur dolorum dolor nemo accusantium voluptates
            labore repellat. Similique, cum repellat! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Beatae totam officiis iure ullam
            possimus magni dignissimos a quod laboriosam reprehenderit, esse sed
            inventore alias fuga repellendus sunt? A, ullam voluptatum?
          </p>
        </div>
        {/* side menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Aouthor</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-8 ">
              <Image
                src="userImg.jpeg"
                className="rounded-full object-cover w-12 h-12"
                w="48"
                h="48"
              />
              <Link to="/test">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500 ">
              New York Times best seller and a father
            </p>
            {/* social media svgs   */}
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostSideMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">All categories</h1>
          <div className="flex flex-col gap-2 text-sm ">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              video editing
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Gastronomy
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            {/* <Link className="underline" to="/">
              Music of the day
            </Link> */}
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default SinglePostPage;
