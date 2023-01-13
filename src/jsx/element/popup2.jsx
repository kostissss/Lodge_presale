import React, { useEffect, useState, Fragment, Component } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import {
  DAIabi,
  //BNBabi,
  USDCabi,
  USDTabi,
  contractAddresses,
  BUSDabi,
  abi,
  abiDUES,
} from "../constants/index.js";
import { ethers } from "ethers";





const Popup2 = ({   }) => {
    const { Moralis, account, isWeb3Enabled, chainId: chainIdHex } = useMoralis();

  
  let [level, setLevel] = useState(0);
  let [duesV, setDuesV] = useState(0);
  let [dues, setDues] = useState(0);
  
  const chainId = parseInt(chainIdHex);
    const presaleAddress1="0x669d3E69E5b100f137604675887f6e3e0cf588D3";
  const presaleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  
 
  
  const { runContractFunction: getLevelOwned } = useWeb3Contract({
    abi: abi,
    contractAddress: presaleAddress,
    functionName: "getLevelOwned",
    params: { user: account },
  });

  const { runContractFunction: getDuesOwned } = useWeb3Contract({
    abi: abiDUES,
    contractAddress: presaleAddress1,
    functionName: "getDuesOwned",
    params: {
      user:account
    },
  });

  const { runContractFunction: getDuesOwnedv } = useWeb3Contract({
    abi: abiDUES,
    contractAddress: presaleAddress1,
    functionName: "getDuesOwnedv",
    params: {
      user:account
    },
  });
  

  async function updateUI() {
    const balanceCallBUSD = (await getLevelOwned()||0 ).toString();
    setLevel(balanceCallBUSD);
    const duesCall=(await getDuesOwned()||0 ).toString();
    setDues(duesCall);
    const duesCallV=(await getDuesOwnedv()||0 ).toString();
    setDuesV(duesCallV)
  }
  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
      
    }
    
    // console.log(`${address}`);
  }, [isWeb3Enabled]);
  

    
    
        return (
              
                <div className="modal fade subscribe-box  " id="exampleModal2" tabIndex="-1" role="dialog" 
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
                    <div className="modal-dialog" role="document">
                      
                        <div  className="dzSubscribe modal-content" >
                          
                            <div className="modal-header">
                                
                                <h5 className="modal-title" id="exampleModalLabel">YOUR WALLET</h5>
                                <p className="birdo button-lg outline radius-md shadow mg1">You have purchased  {Math.round(ethers.utils.formatUnits(duesV, "ether")*100)/100} DUES with 3 month Vest </p>
                                <p className="birdo button-lg outline radius-md  mg1">You have purchased  {Math.round(ethers.utils.formatUnits(dues, "ether")*100)/100} DUES with 3 month Lock </p>
                                <p className="birdo button-lg outline radius-md shadow mg1">You have purchased  {Math.round(ethers.utils.formatUnits(level, "ether")*100)/100} LEVEL Available at launch </p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            
                            <div>
            
           
            
              
               
          </div>{" "}
                                
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            
        )
    }


export default Popup2;



