import React, { useEffect, useState, Fragment, Component } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import {
  DAIabi,
  //BNBabi,
  USDCabi,
  USDTabi,
  contractAddresses,
  BUSDabi,
  abiDUES,
} from "../constants/index.js";
import { ethers } from "ethers";
import toast, { Toaster } from 'react-hot-toast';







const Popup1 = ({   }) => {
    const { Moralis, account, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
    const { runContractFunction } = useWeb3Contract()
  let [balanceBUSD, setBalanceBUSD] = useState(0);
  
  let [ValueOrder, setValueOrder] = useState(0);
  let [Vest, setVest] = useState(false);
  const [selectedButton, setSelectedButton] = useState('button2');
  const [selectedButton1, setSelectedButton1] = useState('button2');
  const handleVest = () => {
    setSelectedButton1('button1')
    setVest(true)
  }
  const handleVest0 = () => {
    setSelectedButton1('button2')
    setVest(false)
  }
  const chainId = parseInt(chainIdHex);

  const presaleAddress =
  "0x669d3E69E5b100f137604675887f6e3e0cf588D3";

  const BUSDaddress =
    chainId in contractAddresses ? contractAddresses[chainId][1] : null;

  const USDCaddress =
    chainId in contractAddresses ? contractAddresses[chainId][2] : null;
  const USDTaddress =
    chainId in contractAddresses ? contractAddresses[chainId][3] : null;

  const DAIaddress =
    chainId in contractAddresses ? contractAddresses[chainId][4] : null;

  const people = [
    { id: 1, name: "BUSD", ABI: BUSDabi, address: BUSDaddress },
    { id: 2, name: "USDC", ABI: USDCabi, address: USDCaddress },
    { id: 3, name: "USDT", ABI: USDTabi, address: USDTaddress },
    { id: 4, name: "DAI", ABI: DAIabi, address: DAIaddress },
  ];
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  const handleClick = () => {
    setSelectedPerson(people[0]);
    setSelectedButton('button1')
     
    
   
  };
  const handleClick1 = () => {
    setSelectedPerson(people[1]);
    setSelectedButton('button2')
   
  };
  const handleClick2 = () => {
    setSelectedPerson(people[2]);
    setSelectedButton('button3')
    
  };
  const handleClick3 = () => {
    setSelectedPerson(people[3]);
    setSelectedButton('button4')
    
  };

  const notify = () => toast(`Succesfully purchased ${Math.round(ValueOrder*100 / 60)/100} DUES`);
  const notify1 = () => toast(`Succesfully approved ${selectedPerson.name} `);
  async function handleDeposit(){
    const approved=await allowance();
    if(approved.toString()=="0"){
    await  runContractFunction({
        params: {
            abi: BUSDabi,
            contractAddress: selectedPerson.address,
            functionName: "approve",
            params: { spender: presaleAddress,
              amount: ethers.utils.parseEther("1000000000000000000000000"),},
        },
        onError: (error) => console.log(error),
        onSuccess: handleApproveSuccess,
    })
      
    }
    else{
    runContractFunction({
      params: {
          abi: abiDUES,
          contractAddress: presaleAddress,
          functionName: "depositBUSD",
          params: { _amount: ethers.utils.parseEther(ValueOrder || "1"),
          token: selectedPerson.address,
        _vest:Vest},
      },
      onError: (error) => console.log(error),
      onSuccess: handleDepositSuccess,
  })


}

  };

  async function handleDepositSuccess(tx) {
    await tx.wait(1)
    notify()
}
async function handleApproveSuccess(tx) {
  await tx.wait(1)
  notify1()
  runContractFunction({
    params: {
        abi: abiDUES,
        contractAddress: presaleAddress,
        functionName: "depositBUSD",
        params: { _amount: ethers.utils.parseEther(ValueOrder || "1"),
        token: selectedPerson.address,
      _vest:Vest},
    },
    onError: (error) => console.log(error),
    onSuccess: handleDepositSuccess,
})
}
  
  
  const { runContractFunction: balanceOfBUSD } = useWeb3Contract({
    abi: BUSDabi,
    contractAddress: selectedPerson.address,
    functionName: "balanceOf",
    params: { account: account },
  });

  
  const { runContractFunction: allowance } = useWeb3Contract({
    
    abi: BUSDabi,
    contractAddress: selectedPerson.address,
    functionName: "allowance",
    params: {
      owner: account,
      spender: presaleAddress,
    },
  });

  async function updateUI() {
    const balanceCallBUSD = (await balanceOfBUSD()||0 ).toString();
    setBalanceBUSD(balanceCallBUSD);
    console.log(selectedPerson.address);
    console.log(balanceCallBUSD);
    
  }
  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
      {console.log({Vest})}
      
    }
    
    // console.log(`${address}`);
  }, [isWeb3Enabled,ValueOrder,selectedPerson]);
  
const mv="6month vest";
const bl="6 month beehive lock";


    
        return (
            
                <div className="modal fade subscribe-box  " id="exampleModal1" tabIndex="-1" role="dialog" 
                
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
                    <div className="modal-dialog" role="document">
                      
                        <div  className="dzSubscribe modal-content" >
                          
                            <div className="modal-header">
                           <img src={require("../../images/logo.png")} alt="" />
                                <h5 className="modal-title" id="exampleModalLabel">BUY DUES</h5>
                                <p className="ct">Choose your amount and vesting options below.</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div>
            Available: {Math.round(ethers.utils.formatUnits(balanceBUSD, "ether")*100)/100}  {selectedPerson.name}
            <div className=" button-lg outline radius-md shadow px-1 py-10  ">
            <button className={selectedButton === 'button1' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '}  onClick={handleClick}>BUSD</button><span>{" "}</span>
              <button className={selectedButton === 'button2' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '}onClick={handleClick1}>USDC</button><span>{" "}</span>
              <button className={selectedButton === 'button3' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '} onClick={handleClick2}>USDT</button><span>{" "}</span>
              <button className={selectedButton === 'button4' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '} onClick={handleClick3}>DAI</button><span>{" "}</span>
              <span>{" "}</span>
              <span>{" "}</span>
              <button className={selectedButton1 === 'button1' ? 'site-button button-lg outline1 radius-md shadow ribbon6' : 'site-button button-lg outline radius-md shadow ribbon6 '} onClick={handleVest}>
              Three Month Vest
        
      </button> <span>{" "}</span>
      <button className={selectedButton1 === 'button2' ? 'site-button button-lg outline1 radius-md shadow ribbon6' : 'site-button button-lg outline radius-md shadow ribbon6 '} onClick={handleVest0}>
      Three Month Lock
        
      </button>
            </div>
            
          
               
          </div>{" "}
                                <div className="">
                                    <input
            className="slidecontainer "
            type="range"
            
            w-full="true"
            min="0"
            max={ethers.utils.formatUnits(balanceBUSD, "ether")}
            step="0.01"
            value={ValueOrder}
            onChange={(event) => {
              setValueOrder(event.target.value);
            }}
            list="tickmarks1"
          />
          <datalist id="tickmarks1">
  <option value="0" label="0%"></option>
  <option value={0.25*Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))} ></option>
  <option value={0.5*Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))}></option>
  <option value={0.75*Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))}></option>
  <option value={Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))}></option>
</datalist>
          {"            "}{" "}
          
                                    <div className=""> You'll get ≈ {Math.round(ValueOrder*100 / 88)/100} DUES</div>
                                </div>
                                
                            </div>
                            <div className="modal-footer">
                                <button  className="site-button button-lg outline radius-md shadow"   onClick={() => handleDeposit()}>BUY ${ValueOrder}</button>
                                <input className="site-button button-lg outline radius-md shadow"
    type="number" // change the type to "number"
    style={{ maxWidth : "35%",borderColor :"#fff",cursor:"zoom-in" }}
    value={ValueOrder} // bind the value of the input field to the same value as the slider
    max={ethers.utils.formatUnits(balanceBUSD, "ether")}
    onChange={(event) => {
      setValueOrder(event.target.value); // update the value of the slider when the input field value changes
    }}
  />
                            </div>
                        </div>
                    </div>
                    
                </div>
            
        )
    }


export default Popup1;



