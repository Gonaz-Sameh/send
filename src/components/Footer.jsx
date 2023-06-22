import React from 'react'
import CopyRightFooter from './CopyRightFooter'
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box" style={{textAlign:"center"}}>
                        <img src={logo} alt="logo" />
                    <p style={{margin:"15px 6px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellendus sunt praesentium aspernatur iure molestias.</p>
                    

                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Hosting</h2>
                    <ul>
                        <li><a href="#">Web Hosting</a></li>
                        <li><a href="#">Cloud Hosting</a></li>
                        <li><a href="#">CMS Hosting</a></li>
                        <li><a href="#">WordPress Hosting</a></li>
                        <li><a href="#">Email Hosting</a></li>
                        <li><a href="#">VPS Hosting</a></li>
                    </ul>
                    </div>                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Domain</h2>
                    <ul>
                        <li><a href="#">Web Domain</a></li>
                        <li><a href="#">Cloud Domain</a></li>
                        <li><a href="#">CMS Domain</a></li>
                        <li><a href="#">WordPress Domain</a></li>
                        <li><a href="#">Email Domain</a></li>
                        <li><a href="#">VPS Domain</a></li>
                    </ul>
                    </div>                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Domain</h2>
                    <ul>
                        <li><a href="#">Web Domain</a></li>
                        <li><a href="#">Cloud Domain</a></li>
                        <li><a href="#">CMS Domain</a></li>
                        <li><a href="#">WordPress Domain</a></li>
                        <li><a href="#">Email Domain</a></li>
                        <li><a href="#">VPS Domain</a></li>
                    </ul>
                    </div>                    
                </div>
            </div>
        </div>
    
        <div style={{margin:"10px",color:"white"}}>
      © 2023 All Rights Reserved
    </div>
    </footer>
    </>
  )
}

export default Footer
