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
const snowflake1 = document.createElement('img')
snowflake1.src = '../images/snow.png'

export default function Index2()  {

    let [showModal, setShowModal] = useState(false);
    const { isWeb3Enabled, chainId } = useMoralis();
    const hideModal = () => setShowModal(false);

    const supportedChains = ["97"];
    const images=[snowflake1]
    
       

    

    

        return (
            
           
               <div>
               
               
              
                

                <div class="dez-coming-soon style-2 wow fadeIn" id="particles-snow" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{"backgroundImage":"url(images/background/bg2.jpg)"}}>
                    
                <div class=" top-center  button-lg outline radius-md   px-1 py-1 ">
                            
                            
                
                                
                <a href="/SnowPresale"  class="ribbon1 site-button button-lg outline radius-md shadow">Snow Presale</a>
                <a href="/SnowStaking"  class="ribbon1 site-button button-lg outline radius-md shadow">Snow Staking</a>
                <a href="/DiceCube" class="ribbon1 site-button button-lg outline radius-md shadow">Dice Cube</a>
                <a href="/SnowRaffle"  class="ribbon1 site-button button-lg outline radius-md shadow">Snow Raffle</a>
                <a href="/SnowRacing" class="ribbon1 site-button button-lg outline radius-md shadow">Snow Racing</a>
      
                                
                                    
                                    <ManualHeader class="" />
                                    
                                    
                                
                            
                        </div>
                
                        
                <Snowfall snowflakeCount={200} images={images} radius={[2.0, 25.0]}speed={[0.5, 2.0]}></Snowfall>
                
                    <div class="clearfix dez-coming-bx">
                        
                        <div class="dez-content top-center posi-center">
                            <div class="logo wow fadeInUp top-md" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="../../images/logo2.png" alt="" /></a>
                            </div>
                            <div class="center-md">
                                <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We Are Coming Soon</h2>
                                <p class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.7s">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur adipisicing</p>
                                
                               
      
                                <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                    <a href="javascript:void(0);" class="site-button gradient openbtn button-lg radius-md m-r10 shadow">Buy Snow</a>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline radius-md shadow">Buy Snow</a>
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
                            <p class="copyright-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">© Snow Games 2022-2023</p>
                        </div>
                        
                    </div>
                    
                </div>

                <Popup  />
                
                </div>
               
            
        )
    }



