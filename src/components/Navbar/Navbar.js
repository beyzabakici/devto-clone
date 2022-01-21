import React from "react";
import { SearchIcon, NotificationIcon } from "../../assets/icons";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-static">
          <img
            className="logo"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="logo"
          />
          <div className="input-wrepper">
            <input className="input" type="text" placeholder="Search..." />
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="navbar-actions">
          <button className="create-post-button">Create Post</button>
          <button className="notifications-button">
            <NotificationIcon className="notification-icon" />
          </button>
          <button className="avatar-button">
            <img
              className="avatar"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--7dNyA9ZI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/790528/7bf6d050-58fd-40cc-a5b6-59413da43d09.jpeg"
              alt="avatar"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
