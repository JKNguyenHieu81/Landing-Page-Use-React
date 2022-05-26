import "./App.css";
import React from "react";
import twoPhone from "./img/twoPhone.png";
import SectionStore from "./SectionStore";
import SectionFeature from "./SectionFeature";
import featureList from "./FeatureItemText";
import describeSecond from "./img/describeSecond.png";
import describeThird from "./img/describeThird.jpg";
import describeThirdImg from "./img/describeThirdImg.jpg";
import SectionTestimonial from "./SectionTestimonial";
import Footer from "./Footer";
import Header from "./Header";
import footerImgVector from "./img/footerImgVector.svg";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="container-page">
          <Header mainImg={twoPhone} sectionType="header" />

          <SectionStore />
          <SectionFeature
            subTitleText="Start your business"
            titleText="Sell your products"
            descriptionText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
            featureList={featureList[0]}
            backgroundImg={describeSecond}
          />
          <SectionFeature
            subTitleText="Grow your business"
            titleText="Market your products"
            descriptionText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
            featureList={featureList[1]}
            backgroundImg={describeThird}
          />
          <SectionFeature
            subTitleText="Manage your business"
            titleText="One simple platform"
            descriptionText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
            featureList={featureList[2]}
            backgroundImg={describeThirdImg}
          />
          <SectionTestimonial />
          <Footer/>
        </div>
      </>
    );
  }
}

export default HomePage;
