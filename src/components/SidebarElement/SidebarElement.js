import React from "react";
import {
  Home,
  Listings,
  Podcasts,
  Videos,
  ReadingList,
  Tags,
  FAQ,
  Sponsors,
  About,
  Contact,
  DevShop,
  CodeOfCount,
  PrivacyPolicy,
  TermOfUse,
} from "../../assets/icons/sidebarIcons";
import "./sidebar-element.scss";

export default function SidebarElement(props) {
  function renderIcon() {
    switch (props.title) {
      case "Home":
        return <Home />;
      case "Listings":
        return <Listings />;
      case "Podcasts":
        return <Podcasts />;
      case "Videos":
        return <Videos />;
      case "Reading List":
        return <ReadingList />;
      case "Tags":
        return <Tags />;
      case "FAQ":
        return <FAQ />;
      case "Sponsors":
        return <Sponsors />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "DEV Shop":
        return <DevShop />;
      case "Code of Count":
        return <CodeOfCount />;
      case "Privacy Policy":
        return <PrivacyPolicy />;
      case "Term of use":
        return <TermOfUse />;
      default:
        break;
    }
  }

  return (
    <a className="sidebar-element" href="/">
      {renderIcon()}
      <p>{props.title}</p>
    </a>
  );
}
