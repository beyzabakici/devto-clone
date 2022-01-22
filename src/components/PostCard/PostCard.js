import React from "react";
import "./post-card.scss";

export default function PostCard(props) {
  const { cover_image, title, user, tag_list } = props.post;

  function renderTags() {
    return (
      <div className="tag-area">
        {tag_list.map((item) => (
          <p className="tag">#{item}</p>
        ))}
      </div>
    );
  }

  function renderUserCard() {
    const {} = user;
    console.log(user);
    return(
      <div>
        <img src={user.profile_image}  />
      </div>
    )
  }

  return (
    <div className="post-card">
      {cover_image && <img className="image" src={cover_image} />}
      <div className="post-area">
        {renderUserCard()}
        <div className="description-area">
          <p className="title">{title}</p>
          {tag_list && renderTags()}
        </div>
      </div>
    </div>
  );
}
