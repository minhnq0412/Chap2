import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetail = () => {
  console.log(useParams());
  const navigate = useNavigate();
  return (
    <div>
      Blog Page Detail
      <button
        onClick={() => navigate("/blog")}
        className="p-3 rounded-lg text-white bg-slate-400"
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetail;
