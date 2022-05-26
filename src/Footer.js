import { Component } from "react";
import React from "react";
import appStoreIcon from "./img/appStoreIcon.svg";
import googlePlayIcon from "./img/googlePlayIcon.svg";
import yellowCycleIcon from "./img/yellowCycleIcon.svg";
import dotBackground from "./img/dotBackground.svg";
import subBgOrange from "./img/subBgOrange.png";
import iconCycleGreen from "./img/iconCycleGreen.svg";
import Button from "./Button";

class Footer extends Component {
  render() {
    return (
      <div
        className={
          this.props.sectionType == "footer" ? "section-container footer" : "section-container footer"
        }
      >
        <div className="content-section">
          <div className="text-content" style={{ color: "white" }}>
            <h1 className="title-content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
            </h1>{" "}
            <br />
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              maximus ut risus id malesuada. Etiam feugiat dolor commodo
              imperdiet sodales.
            </p>{" "}
            <br />
            <Button content="Download Now" />
            <div className="app-icon">
              <img className="appStore-icon" src={appStoreIcon} />
              <img className="googlePlay-icon" src={googlePlayIcon} />
            </div>
          </div>
          <div className="img-content">
            <img className="cycle-icon" src={yellowCycleIcon} />
            <img className="sub-bg-green-footer" src={iconCycleGreen} style={{zIndex: 10}}/>
            <img className="main-img" src={this.props.mainImg} />
          </div>
        </div>
        {/* <div className="infomation-author" style={{display: 'flex', justifyContent: 'space-around'}}>
          <p className="author-name" style={{fontSize: '24px', color: 'white'}}>Made by Hieu and Tuan</p>
          <a href="https://www.facebook.com/BuildersVN/" className="link-profile" style={{textDecoration: 'none', color: 'wheat'}}>Builders_UniVN</a>
        </div> */}
      </div>
    );
  }
}
export default Footer;
