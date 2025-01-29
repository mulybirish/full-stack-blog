import React from "react";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  const params = useParams();
  return (
    <div>
      <h1>single page</h1>
    </div>
  );
}

export default SinglePostPage;
