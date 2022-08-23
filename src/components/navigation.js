import React from 'react';
import { socialLinks } from "../data";

import './navigation.css'

const Navigation = () =>
 {
    return ( 
      <>
        <nav class="main-nav-outer" id="test">
        <div class="container">
              <ul class="main-nav">
                <li><img class="nav-brand" src="https://drive.google.com/uc?id=1GBde3GMNu3Mn6B-OcQW4SqNel6zO1wDG" alt=""/><a href="#header"><p className='para'>Home</p></a></li>
                  <li><a href="#service"><p className='para'>About me</p></a></li>
                  <li><a href="#Portfolio"><p className='para'>Services</p></a></li>
                  <li class="small-logo"><a href="#header"><img class="nav-logo" src="https://drive.google.com/uc?id=1CWg4lJ621CvIE54fSa4KfxcSYNhQ7C_u" alt="t"/></a></li>
                  <li><a href="#client"><p className='para'>Prices</p></a></li>
                  <li><a href="#team"><p className='para'>Portfolio</p></a></li>
                  <li><a href="#contact"><p className='para'>Contacts</p></a></li>
                  <li><button className='button'>ENG/RU</button></li>
              </ul>
          </div>
        </nav>
        <div class="vl"></div>
          <span className="btn-inner--icon">
              <a href={socialLinks.facebook} ><i className="fa fa-facebook fa-lg btn-facebook" /></a>
              <a href={socialLinks.instagram} ><i className="fa fa-instagram fa-lg btn-instagram" /></a>
              <a href={socialLinks.linkedin} ><i className="fa fa-linkedin fa-lg btn-telegram" /></a>
          </span>
        <div class="v2"></div>
      </>
     );
}
 
export default Navigation;