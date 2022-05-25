import { Component } from "react";
import { SectionText } from "./SectionStore";
import Button from "./Button";

function TestimonialItem(props) {
  return (
    <div className="testimonial-item-container">
      <p className="text-detail">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores
      </p>
      <hr></hr>
      <div className="testimonial-info-container">
        <div class="testimonial-avatar-container">
          <img alt="" src=""></img>
        </div>

        <div className="testimonial-info">
          <p className="tesiimonial-name">Rob Hope</p>
          <p className="website">Onepagelove.com</p>
        </div>
      </div>
    </div>
  );
}
class SectionTestimonial extends Component {
  render() {
    return (
      <div className="content-section testimonial-section">
        <SectionText
          subTitleText="A home for your business"
          titleText="Join your fellow creators"
          descriptionText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        />
        <Button content="Download now" />

        <div class="testimonial-container">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </div>
      </div>
    );
  }
}
export default SectionTestimonial;
