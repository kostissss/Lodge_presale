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
} from "../constants/index.js";
import { ethers } from "ethers";
import toast, { Toaster } from 'react-hot-toast';





const Popup = ({   }) => {
    const { Moralis, account, isWeb3Enabled, chainId: chainIdHex, } = useMoralis();

  let [balanceBUSD, setBalanceBUSD] = useState(0);
  let [ValueOrder, setValueOrder] = useState(0);
  const [selectedButton, setSelectedButton] = useState('button2');
  const chainId = parseInt(chainIdHex);

  const presaleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
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
  const { runContractFunction } = useWeb3Contract()
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

  const notify = () => toast(`Succesfully purchased ${Math.round(ValueOrder*100 / 0.33)/100} LEVEL`);
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
        onSuccess: handleApprovalSuccess,
    })
    }
    else{
    
    runContractFunction({
      params: {
          abi: abi,
          contractAddress: presaleAddress,
          functionName: "depositBUSD",
          params: { _amount: ethers.utils.parseEther(ValueOrder || "1"),
          token: selectedPerson.address,},
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
async function handleApprovalSuccess(tx) {
  await tx.wait(1)
  notify1()
  runContractFunction({
    params: {
        abi: abi,
        contractAddress: presaleAddress,
        functionName: "depositBUSD",
        params: { _amount: ethers.utils.parseEther(ValueOrder || "1"),
        token: selectedPerson.address,},
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
    
    abi: BUSDabi ,
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
  }
  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
      
    }
    
    // console.log(`${address}`);
  }, [isWeb3Enabled,ValueOrder,selectedPerson]);

 
  
  

    
    
        return (
            
                <div className="modal fade subscribe-box  " id="exampleModal" tabIndex="-1" role="dialog" 
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
                    <div className="modal-dialog" role="document">
                      
                        <div  className="dzSubscribe modal-content" >
                          
                            <div className="modal-header">
                           <img src={require("../../images/logo.png")} alt="" />
                                <h5 className="modal-title" id="exampleModalLabel">BUY LEVEL</h5>
                                <p>Choose any amount of LEVEL. LEVEL will not be subject to vesting.</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div>
            Available: {Math.round(ethers.utils.formatUnits(balanceBUSD, "ether")*100)/100} 
            <div className=" button-lg outline radius-md shadow px-1 py-10  ">
            <button className={selectedButton === 'button1' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '}  onClick={handleClick}>BUSD</button><span>{" "}</span>
              <button className={selectedButton === 'button2' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '}onClick={handleClick1}>USDC</button><span>{" "}</span>
              <button className={selectedButton === 'button3' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '} onClick={handleClick2}>USDT</button><span>{" "}</span>
              <button className={selectedButton === 'button4' ? 'site-button button-lg outline1 radius-md shadow' : 'site-button button-lg outline radius-md shadow  '} onClick={handleClick3}>DAI</button><span>{" "}</span>
            </div>
            
              
               
          </div>{" "}
          <div className="">
  <input
    className="slidecontainer "
    type="range"
    min="0"
    max={ethers.utils.formatUnits(balanceBUSD, "ether")}
    step="0.01"
    value={ValueOrder} // bind the value of the input field to the same value as the slider
    onChange={(event) => {
      setValueOrder(event.target.value);
    }}
    list="tickmarks"
  />
  <datalist id="tickmarks">
    <option value="0" label="0%"></option>
    <option value={0.25*Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))} ></option>
    <option value={0.5*Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))}></option>
    <option value={0.75*Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))}></option>
    <option value={Math.round(ethers.utils.formatUnits(balanceBUSD, "ether"))}></option>
  </datalist>
  {"            "}{" "}
  
  
  {" "}
  <div className=""> You'll get ≈ {Math.round(ValueOrder*100 / 0.33)/100} LEVEL</div>
</div>

                                
                                
                               
                            </div>
                            <div className="modal-footer">
                                <button  className="site-button button-lg outline radius-md shadow"   onClick={() => handleDeposit()}>Buy ${ValueOrder}</button>
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


export default Popup;



