import React from "react";
import "./post-card.scss";

export default function PostCard(props) {
  console.log(props.post);
  const { image, title, createDate, tags, likeCount, ownerUser } = props.post;
  return (
    <div className="post-card">
      <img className="image" src={image} />
    </div>
  );
}
