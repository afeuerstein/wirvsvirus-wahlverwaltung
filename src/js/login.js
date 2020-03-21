
"use strict";

const logInStates = Object.freeze({
    "before" : 1,
    "during" : 2,
    "after" : 3,
    "failed" : 4,
    "nonEthereum" : 5
 });
var logInStatus = logInStates.before;

var account;

async function _logIn(){
    // Modern dapp browsers...
    if(window.ethereum){
        console.log("Try login with metamask.");

        window.web3 = new Web3(ethereum);
        window.ethereum.autoRefreshOnNetworkChange = false; //silences warning about no autofresh on network change
        try{
            logInStatus = logInStates.during;
            //_UPDATE UI NOW_

            // Request account access if needed
            account = await ethereum.enable();
            console.log("User logged in with account: " + account);
            logInStatus = logInStates.after;
        }
        catch{
            console.log("User denied account access.");
            logInStatus = logInStates.failed;
        }
    }
    //Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        console.log("Legacy dapp browsers detected.");
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected.');
        logInStatus = logInStates.nonEthereum;
    }
    //_UPDATE UI NOW_
}

async function _logOff(){
    window.web3 = null;
    account = null;
    logInStatus = logInStates.before;
    //_UPDATE UI NOW_
    console.log("User logged off.");
}