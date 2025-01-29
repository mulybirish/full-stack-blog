import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image  */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* details  */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Please God let me prove to myself i can.
        </Link>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae iste
          laudantium, distinctio rem minima optio ratione harum animi rerum
          dolorum illo quo neque! Nam architecto dolorem, praesentium doloremque
          voluptatem modi.
        </p>
        <Link to="/test" className="underline text-blue-700 text-sm">
          Read more
        </Link>
      </div>
      {/* image  */}
    </div>
  );
}

export default PostListItem;
