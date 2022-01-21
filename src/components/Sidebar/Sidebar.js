import React from "react";
import {
  Discord,
  Facebook,
  Github,
  Instagram,
  Twitter,
} from "../../assets/icons/sidebarIcons";
import "./sidebar.scss";
import SidebarElement from "../SidebarElement/SidebarElement";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarElement title="Home" />
      <SidebarElement title="Reading List" />
      <SidebarElement title="Listings" />
      <SidebarElement title="Podcasts" />
      <SidebarElement title="Videos" />
      <SidebarElement title="Tags" />
      <SidebarElement title="FAQ" />
      <SidebarElement title="DEV Shop" />
      <SidebarElement title="Sponsors" />
      <SidebarElement title="About" />
      <SidebarElement title="Contact" />
      <p className="title">Other</p>
      <SidebarElement title="Code of Count" />
      <SidebarElement title="Privacy Policy" />
      <SidebarElement title="Term of use" />
      <div className="social-container">
        <div className="social-icon">
          <Twitter />
        </div>
        <div className="social-icon">
          <Facebook />
        </div>
        <div className="social-icon">
          <Github />
        </div>
        <div className="social-icon">
          <Instagram />
        </div>
        <div className="social-icon">
          <Discord />
        </div>
      </div>
      <p className="title">My Tags</p>
      <p className="tag">#android</p>
      <p className="tag">#git</p>
      <p className="tag">#vue</p>
      <p className="tag">#flutter</p>
      <p className="tag">#vscode</p>
    </div>
  );
}
