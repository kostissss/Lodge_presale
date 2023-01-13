import React, { Component } from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import Popup from '../element/popup';

// import '../../plugins/particles/particles';
// import '../../plugins/particles/particles.app';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-2.css';
import ManualHeader from '../element/ManualHeader';

import { useMoralis } from 'react-moralis';
import Snowfall from 'react-snowfall';
import Popup1 from '../element/popuo1';
const snowflake1 = document.createElement('img')
snowflake1.src = '../images/snow.png'

    const images=[snowflake1]
class BLACK extends Component {

    
    
       

    

    

        render ()
        {return (
            
           
              
               
               <>
               
                

                <div class="dez-coming-soon style-2 wow fadeIn " id="particles-snow" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{backgroundColor:"#000000",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'}}>
                    
                <div class=" top-center  button-lg outline radius-md   px-1 py-1 ">
                            
                            
                
                                
                
      
                                
                                    
                                    <ManualHeader class="ribbon2 site-button button-lg outline radius-md shadow" /><Snowfall snowflakeCount={200} images={images} radius={[2.0, 25.0]}speed={[0.5, 2.0]}></Snowfall>
                                    <a class="ribbon4"href="#"><img src={require("../../images/logo.png")} alt="" /></a>
                                    
                                    
                                
                            
                        </div>
                        
                        
                        
                       
                
                    <div class="clearfix dez-coming-bx">
                        
                        <div class="dez-content top-center posi-center">
                        
                            
                            <div class="center-md">
                            <div class="dez-content top-center" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a class="ribbon5" href="#"><img src={require("../../images/lodge-capital.png")}width = "400" height = "400" /></a>
                                
                            </div>

                                <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">DUES & LEVEL PRESALE (ROUND 1 OF 3)

</h2>
                                <p class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.7s">DUES: You can choose between two vesting options. Option A is 10% upon launch and 1% per day for 90 days. Option B is a 3 month lock in the Beehive.</p>
                                
                                <p class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.7s">LEVEL: 100% of your LEVEL will be available upon launch.

</p>
      
                                <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                    <a href="javascript:void(0);"data-toggle="modal" data-target="#exampleModal1" class="site-button button-lg outline radius-md shadow">Buy DUES</a><span>{"  "}</span>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline radius-md shadow">Buy LEVEL</a>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-left">
                            <ul class="dez-social-icon">
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.0s"><a class="fa fa-facebook" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s"><a class="fa fa-twitter" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s"><a class="fa fa-linkedin" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.9s"><a class="fa fa-google-plus" href="#" ></a></li>
                            </ul>
                            <p class="copyright-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">© Lodge Capital 2022-23</p>
                        </div>
                        
                    </div>
                    <Popup  />
                <Popup1  />
                
                </div>

                
                
                </>
            
        )
    };


}
export default BLACK;