import { Component } from "react";
import React from "react";
import appStoreIcon from "./img/appStoreIcon.svg";
import googlePlayIcon from "./img/googlePlayIcon.svg";
import yellowCycleIcon from "./img/yellowCycleIcon.svg";
import iconCycleGreen from "./img/iconCycleGreen.svg";
import Button from "./Button";
import footerImgVector from "./img/footerImgVector.svg";

class Footer extends Component {
  render() {
    return (
      <div
        className={
          this.props.sectionType === "footer" ? "section-container footer" : "section-container footer"
        }
      >
        <div className="content-section">
          <div className="text-content" style={{ color: "white" }}>
            <h1 className="title-content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
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
              <img className="googlePlay-icon" src={googlePlayIcon} alt="img"/>
            </div>
          </div>
          <div className="img-content">
            <img className="cycle-icon" src={yellowCycleIcon} alt="img"/>
            <img className="sub-bg-green-footer" alt="img" src={iconCycleGreen} style={{zIndex: 10}}/>
            <img className="main-img" src={footerImgVector} alt="img"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
