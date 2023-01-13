import React, { Component,useEffect } from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import Popup from '../element/popup';
import ProgressBar from "react-bootstrap/ProgressBar";


// import '../../plugins/particles/particles';
// import '../../plugins/particles/particles.app';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-2.css';
import ManualHeader from '../element/ManualHeader';

import { useMoralis,useWeb3Contract } from 'react-moralis';
import Snowfall from 'react-snowfall';
import Popup1 from '../element/popuo1';
import { abi,contractAddresses,abiDUES } from '../constants/index';
import Popup2 from '../element/popup2';
import toast, { Toaster } from 'react-hot-toast';
const snowflake1 = document.createElement('img')
snowflake1.src = '../images/snow.png'

export default function BLACK()  {
  
    let [showModal, setShowModal] = useState(false);
    let [roundDeposits,setRoundDeposits]=useState(0);
    let [roundMax,setRoundMax]=useState(0);
    let [roundDeposits1,setRoundDeposits1]=useState(0);
    let [roundMax1,setRoundMax1]=useState(0);
    const { isWeb3Enabled, chainId: chainIdHex ,account} = useMoralis();
    const hideModal = () => setShowModal(false);
    const [progress, setProgress] = useState(0);
    const chainId = parseInt(chainIdHex);
    const[totalRaised,setTotalRaised]=useState(0);
    const [error, setError] = useState();
    const ww=window.innerWidth;
    let blured=false;
    const presaleAddress =
    "0x669d3E69E5b100f137604675887f6e3e0cf588D3";
    const presaleAddress1="0xa329C57abA07927b9D2AF9c758A6ceD39336565F";
    let url="https://rpc.ankr.com/bsc";
    const provider = new ethers.providers.JsonRpcProvider(url);

    const myContract=new ethers.Contract(presaleAddress,abiDUES,provider);
    const myContract1=new ethers.Contract(presaleAddress1,abi,provider);

    const { runContractFunction: getTotalRaised } = useWeb3Contract({
        abi: abiDUES,
        contractAddress: presaleAddress,
        provider:provider,
        functionName: "getTotalRaised",
        
        
      });

      const { runContractFunction: getRoundDeposits } = useWeb3Contract({
        abi: abiDUES,
        contractAddress: presaleAddress,
        provider:provider,
        functionName: "getRoundDeposits",
        
        
      });
      const { runContractFunction: getRoundMax } = useWeb3Contract({
        abi: abiDUES,
        contractAddress: presaleAddress,
        provider:provider,
        functionName: "getRoundMax",
        
        
      });

      const { runContractFunction: getRoundDeposits1 } = useWeb3Contract({
        abi: abi,
        contractAddress: presaleAddress1,
        provider:provider,
        functionName: "getRoundDeposits",
        
        
      });
      const { runContractFunction: getRoundMax1 } = useWeb3Contract({
        abi: abi,
        contractAddress: presaleAddress1,
        provider:provider,
        functionName: "getRoundMax",
        
        
      });

      
      
      const blur= () => blured=!blured;
    const supportedChains = ["97"];
    const images=[snowflake1]
    
       const handleClick = () => setProgress(prevProgress => prevProgress + 1);

       async function updateUI() {
        
        
        const rdep=(await myContract.getRoundDeposits()||0).toString();
        const callmax=(await myContract.getRoundMax()||0).toString();
        setRoundMax(callmax);
        console.log(rdep);
        console.log(totalRaised);
    setRoundDeposits(rdep);
    const rdep1=(await myContract1.getRoundDeposits()||0).toString();
        const callmax1=(await myContract1.getRoundMax()||0).toString();
        setRoundMax1(callmax1)
        
    setRoundDeposits1(rdep1);
        
      }
      useEffect(() => {
        async function fetchData() {
          // Fetch the values using the `useWeb3Contract` hook
          const roundDeposits = (await getRoundDeposits()||0).toString()
          const roundMax = (await getRoundMax()||0).toString()
          const roundDeposits1 = (await getRoundDeposits1()||0).toString()
          const roundMax1 = (await getRoundMax1()||0).toString()
      
          // Update the component state with the fetched values
          setRoundDeposits(roundDeposits);
          setRoundMax(roundMax);
          setRoundDeposits1(roundDeposits1);
          setRoundMax1(roundMax1);
        }
      
        fetchData();
      }, []);
      useEffect(() => {
        window.onload = function() {
          updateUI();
        }
      }, [])
      const handleNetworkSwitch = async (networkName) => {
        setError();
        await changeNetwork({ networkName, setError });
      };

      const changeNetwork = async ({ networkName, setError }) => {
        try {
          if (!window.ethereum) throw new Error("No crypto wallet found");
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...networks[networkName]
              }
            ]
          });
        } catch (err) {
          setError(err.message);
        }
      };
      const networks = {
        polygon: {
          chainId: `0x${Number(137).toString(16)}`,
          chainName: "Polygon Mainnet",
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
          },
          rpcUrls: ["https://polygon-rpc.com/"],
          blockExplorerUrls: ["https://polygonscan.com/"]
        },
        bsc: {
          chainId: `0x${Number(56).toString(16)}`,
          chainName: "Binance Smart Chain Mainnet",
          nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18
          },
          rpcUrls: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
          ],
          blockExplorerUrls: ["https://bscscan.com"]
        }
      };

      const BlurredScreen = ({ isConnectedToCorrectChain }) => {
        return (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              background: "#000",
             
            }}
          >
            <h1 className='ribbon3' style={{color:"#fff"}}>{`Please switch to bscMainet.`}</h1>
            <button
            onClick={() => handleNetworkSwitch("bsc")}
            className="mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none w-full"
          >
            Switch to BSC
          </button>
          </div>
        );
      };

      

function CountdownTimer({  }) {
  // Set up the state for the timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
   const targetDate=new Date(Date.UTC(2022,11,25,8,0,0));

  useEffect(() => {
    window.onload=function(){updateUI();}
    // Calculate the remaining time every second
    const interval = setInterval(() => {
      const currentDate = new Date();
     
      const difference = targetDate - currentDate;

      if (difference > 0) {
        // Calculate the remaining time
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update the state with the remaining time
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // Clear the timer when the countdown is finished
        clearInterval(interval);
      }
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(interval);
  }, [targetDate]);

  // Return the timer display
  return( <div>{ timeLeft.days==0&&timeLeft.hours==0&&timeLeft.seconds==0?(
    <div></div>): <h2 className="dez-title ml2 wow fadeInUp padfixer" >
      PRESALES OPEN IN {timeLeft.days} DAYS {timeLeft.hours} HOURS {timeLeft.minutes} MINUTS {timeLeft.seconds} SECONDS
    </h2>
  }</div>
  );
}

        return (
            
           
              
               
               
               
                

                <div className={blur==true?"blur dez-coming-soon style-2 wow fadeIn anticringe":"dez-coming-soon style-2 wow fadeIn anticringe"} id="particles-snow" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{backgroundColor:"#000000",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'}}>



                   
                <div className=" top-center  button-lg outline radius-md   px-1 py-1 ">
                            
                <Snowfall snowflakeCount={200} images={images} radius={[2.0, 25.0]}speed={[0.1, 1.0]}></Snowfall>
                    <ManualHeader className="ribbon2 site-button button-lg outline radius-md shadow" />
                    
                   
                
      
                
                                    
                                    
                                    <a className="ribbon3"href="#"><img src={require("../../images/logo.png")} alt="" /></a>
                                    
                                    
                                
                            
                        </div>
                        
                        
                        
                       
                
                    <div className="clearfix dez-coming-bx">
                    
                        <div className="dez-content top-center posi-center">
                        
                            
                            <div className="center-md">
                           
      
      
                            <div className="dez-content top-center" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                
                                <a className="ribbon5" href="#"><img src={require("../../images/presale-header.png")}width = "400" height = "400" /></a>

                                <CountdownTimer  ></CountdownTimer>
                                <div style={{marginTop: '20px'}} className="dez-coming-btn wow fadeInUp ribbon5 " data-wow-duration="1.5s" data-wow-delay="2.2s">
                                <div className="center-md">
                                
                                
                                
                                
                            </div>
                                    <a  href="javascript:void(0);"data-toggle="modal" data-target="#exampleModal1" className="site-button button-lg outline radius-md shadow mg1">Buy DUES</a><span>{"  "}</span><span>{"  "}</span><span>{"  "}</span><span>{"  "}</span>
                                    <a  href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" className="site-button button-lg outline radius-md shadow" >Buy LEVEL</a>
                                </div>
                                <span>{"  "}</span>
                            </div>
                            

      
                                
                                <div className='touse' style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div className={ww<1200?'touse2 ':'touse1 '}><div>
  SOLD {(180+Math.round(ethers.utils.formatUnits(roundDeposits, "ether")/88)).toLocaleString()} DUES OUT OF 380
  </div>
    <progress className='radius-md fs'  value={180 +ethers.utils.formatUnits(roundDeposits, "ether")/88} max={Math.round(ethers.utils.formatUnits("380000000000000000000", "ether"))}></progress>
  </div>
  <div className={ww<1200?'touse2 ':'touse1 '}>
    <div>
  SOLD {Math.round(ethers.utils.formatUnits(roundDeposits1, "ether")/0.33).toLocaleString()} LEVEL OUT OF {Math.round(ethers.utils.formatUnits(roundMax1, "ether",{
  decimalPlaces: 0,
})/0.33).toLocaleString()} 
  </div>
    <progress className='radius-md fs' value={ethers.utils.formatUnits(roundDeposits1, "ether")} max={(ethers.utils.formatUnits(roundMax1, "ether"))} ></progress>
  </div>
  </div>
</div>

<h2 className="dez-title ml2 wow fadeInUp padfixer" >
     VESTING OPTIONS
    </h2>
                                <p className="wow fadeInUp bold" data-wow-duration="1.5s" data-wow-delay="1.7s">DUES:
Option A is 10% upon launch and 3%/day vested linearly.
Option B is 10% upon launch, 10% in a 3 month Beehive lock and 80% vested linearly, 2%/day.</p>
                                
                                <p className="wow fadeInUp bold" data-wow-duration="1.5s" data-wow-delay="1.7s">LEVEL: 100% of your LEVEL will be available upon launch.

</p>
      
                               
                            </div>
                        </div>
                        <div className="bottom-left">
                            <ul className="dez-social-icon">
                                <li className="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.0s"> <a className="ribbon8"href="https://discord.gg/lodgecapital"><img src={require("../../images/discord.png")} alt="" style={{ backgroundColor:"#000000"}}/></a></li>
                                <li className="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s"> <a className="ribbon8"href="https://t.me/lodgecapital"><img src={require("../../images/tg.png")} alt="" style={{ backgroundColor:"#000000"}}/></a></li>
                                <li className="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s"> <a className="ribbon8"href="https://twitter.com/@lodge_capital"><img src={require("../../images/twitter.png")} alt="" style={{ backgroundColor:"#000000"}}/></a></li>
                                <li className="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.9s"> <a className="ribbon8"href="https://lodgedocs.gitbook.io/lodge-capital/ "><img src={require("../../images/docs.png")} alt="" style={{ backgroundColor:"#000000"}}/></a></li>
                            </ul>
                            <p className="copyright-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">© Lodge Capital 2022-23</p>
                        </div>
                        
                    </div>
                    <Popup   />
                <Popup1  />
                <Popup2  />
                <Toaster position="top-right" />
                
                </div>

                
                
               
            
        )
    }



