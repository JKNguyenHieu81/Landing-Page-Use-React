import { Component } from "react";
import describeFirst from "./img/describeFirst.jpg";
class SectionStore extends Component {
  render() {
    return (
      <div className="create-section">
        <div className="img-content">
          <img className="describe-first" alt="img" src={describeFirst} />
        </div>
        <div className="text-content-create-section">
          <p className="sub-title-text">Build your business</p>
          <p className="title-text">Create Your Store</p>
          <p className="description-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam</p>
        </div>
      </div>
    );
  }
}

export function SectionText(props) {
  const { subTitleText, titleText, descriptionText } = props;
  return (
    <div className="text-content">
      <p className="sub-title-text">{subTitleText}</p>
      <p className="title-text">{titleText}</p>
      <p className="description-text">{descriptionText}</p>
    </div>
  );
}
export default SectionStore;
