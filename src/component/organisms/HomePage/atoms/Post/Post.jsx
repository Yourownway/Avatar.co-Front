import React from "react";

import PostButton from "./PostButton";
// import usePost from "./usePost";

export default function Post({ postDefaultData }) {

// const {}= usePost()
  return (
    <div className="trainingPost-container">
      <ul>
        {postDefaultData.map((data) => (
          <li key={data.id}>
            <div className="trainingPost-post">
              <h2>{data.postName}</h2>
              <h3>{data["User.firstName"]}</h3>
              <h3> /{data.postMaxGuest}</h3>
              <PostButton postDefaultData={postDefaultData} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
