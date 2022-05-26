import { Component } from "react";
import { SectionText } from "./SectionStore";
class SectionFeature extends Component {
  render() {
    let {
      subTitleText,
      titleText,
      descriptionText,
      featureList,
    } = this.props;
    const featureItems = featureList.map((item, index) => (
      <FeatureItem
        icon={item.icon}
        title={item.title}
        descriptionText={item.descriptionText}
        key={index}
      />
    ));
    return (
      <div className="content-section section-feature">
        <SectionText
          subTitleText={subTitleText}
          titleText={titleText}
          descriptionText={descriptionText}
        />
        <div className="feature-container">
          <div className="feature-col">{featureItems.slice(0, 2)}</div>
          <div className="img-container">
            <img
              className="feature-img"
              alt="lol"
              src={this.props.backgroundImg}
            />
          </div>

          <div className="feature-col">{featureItems.slice(2)}</div>
        </div>
      </div>
    );
  }
}
function FeatureItem(props) {
  const { icon, title, descriptionText } = props;
  return (
    <div class="feature-item-container">
      <img className="feature-item-icon" src={icon} />
      <h1 className="title-text">{title}</h1>
      <p className="description-text">{descriptionText}</p>
    </div>
  );
}
export default SectionFeature;
