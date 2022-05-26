import { Component } from "react";
import React from "react";
import twoPhone from "./img/twoPhone.png"
import appStoreIcon from "./img/appStoreIcon.svg";
import googlePlayIcon from "./img/googlePlayIcon.svg";
import yellowCycleIcon from "./img/yellowCycleIcon.svg";
import dotBackground from "./img/dotBackground.svg";
import subBgOrange from "./img/subBgOrange.png";
import Button from "./Button";

class Header extends Component {
  render() {
    return (
      <div
        className={
          this.props.sectionType === "header"
            ? "section-container header"
            : "section-container footer"
        }
      >
        <div className="header-element">
          <h2 className="brand-name" style={{ color: 'white' }}>『J』『Y』『K』</h2>
          {this.props.sectionType === "header" && <Button content="Download" />}
        </div>
        <div className="content-section">
          <div className="text-content" style={{ color: "white" }}>
            <h1 className="title-content">
              Sell Digital <br /> Product the <br /> easy-peasy way
            </h1>
            <br />
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              maximus ut risus id malesuada. Etiam feugiat dolor commodo
              imperdiet sodales.
            </p>
            <br />
            <Button content="Download Now" />
            <div className="app-icon">
              <img className="appStore-icon" src={appStoreIcon} alt="img"/>
              <img className="googlePlay-icon" src={googlePlayIcon}alt="img" />
            </div>
          </div>
          <div className="img-content">
            <img className="dot-icon" src={dotBackground} alt="img"/>
            <img className="cycle-icon" src={yellowCycleIcon} alt="img"/>
            <img className="main-img" src={twoPhone} alt="img"/>
          </div>
        </div>
        {this.props.sectionType === "header" && (
          <img className="sub-bg-orange" src={subBgOrange} alt="img"/>
        )}
      </div>
    );
  }
}
export default Header;
