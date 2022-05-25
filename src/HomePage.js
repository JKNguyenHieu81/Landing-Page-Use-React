import './App.css';
import React from 'react';
import appStoreIcon from './img/appStoreIcon.svg'
import googlePlayIcon from './img/googlePlayIcon.svg'
import twoPhone from './img/twoPhone.png'
import iconCycleGreen from './img/iconCycleGreen.svg'
import dotBackground from './img/dotBackground.svg'
import subBgOrange from './img/subBgOrange.png'
import describeFirst from './img/describeFirst.jpg'

function Button(props) {
  const {content} = props
  return (
    <button className='dowload-btn'>{content}</button>
  )
}


// function SectionSell(props) {
//   const {intro, header, describe} = props
// }


class HomePage extends React.Component {
  render() {
    return (
      <div className="section-container">
        <div className='header-element'>
        <h1 className='brand-name'> 『J』『Y』『K』 </h1>
        <Button content="Dowload"/>
        </div>
        <div className='content-section'>
          <div className='text-content' style={{color: 'white'}}>
            <h1 className='title-content'>Sell Digital <br/> Product the <br/> easy-peasy way</h1> <br/>
            <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ut risus id malesuada. Etiam feugiat dolor commodo imperdiet sodales.</p> <br/>
            <Button content="Dowload Now"/>
            <div className='app-icon'>
              <img className='appStore-icon' src={appStoreIcon}/>
              <img className='googlePlay-icon' src={googlePlayIcon} />
            </div>
          </div>
          <div className='img-content'>
              <img className='dot-icon' src={dotBackground}/>
              <img className='cycle-icon' src={iconCycleGreen}/>
              <img className='main-img' src={twoPhone}/>
          </div>
        </div>
        <img className='sub-bg-orange' src={subBgOrange} />
        <div className='section-intro'>
          <img src={describeFirst}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
