import { Component } from "react";
import { SectionText } from "./SectionStore";
import userAvtOne from '../src/img/userAvtOne.svg'
import userAvtTwo from '../src/img/userAvtTwo.svg'
import userAvtThree from '../src/img/userAvtThree.svg'
import Button from "./Button";

function TestimonialItem(props) {
  const {src, userName, userLinkSocial} = props;
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
          <img alt="avatar-user" src={src}></img>
        </div>

        <div className="testimonial-info">
          <h5 className="tesiimonial-name">{userName}</h5>
          <p className="website">{userLinkSocial}</p>
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
          <TestimonialItem src={userAvtOne} userName="Steven He" userLinkSocial="StevenHe.com"/>
          <TestimonialItem src={userAvtTwo} userName="Jonh Tie" userLinkSocial="JKs.com"/>
          <TestimonialItem src={userAvtThree} userName="David Hulk" userLinkSocial="Konandev.com"/>
        </div>
      </div>
    );
  }
}
export default SectionTestimonial;
