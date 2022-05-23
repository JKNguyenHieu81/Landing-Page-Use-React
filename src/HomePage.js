import './App.css';
import React from 'react';
import appStoreIcon from '../src/img/appStoreIcon.svg'
import googlePlayIcon from '../src/img/googlePlayIcon.svg'
import twoPhone from '../src/img/twoPhone.png'
import iconCycleGreen from '../src/img/iconCycleGreen.svg'
import dotBackground from '../src/img/dotBackground.svg'

function Button(props) {
  const {content} = props
  return (
    <button className='dowload-btn'>{content}</button>
  )
}

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
              <img src={appStoreIcon}/>
              <img src={googlePlayIcon} />
            </div>
          </div>
          <div className='img-content'>
            <img className='dot-icon' src={dotBackground}/>
              <img className='cycle-icon' src={iconCycleGreen}/>
              <img src={twoPhone}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
