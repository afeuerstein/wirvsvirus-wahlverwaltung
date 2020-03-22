pragma solidity ^0.6.0;

import "./Whitelisting.sol";

/**
 * @title "e-Voting"
 * @notice The e-Voting Factory allows political decision-makers to create their votes
 * @dev This is untested code. DO NOT USE FOR PRODUCTION
 */
contract eVoting {
    //Variables
    string public voteName;
    string[] public voteOptions;

    // Read/write votes
    mapping(address => uint) public votes;

    constructor(string memory _voteName) public{
        voteName = _voteName;
    }

    //Functions
    function vote(uint decision) public whenWhitelisted returns(bool){
        require(voteOptions[decision] != 0, "Vote option not valid."); //make sure vote option is valid
        require(votes[msg.sender] != 0, "You can only vote once."); //one vote per person, change vote prohibited

        votes[msg.sender] = decision;

        return true;
    }

    function addVoteOption(string memory option) public onlyOwner returns(bool){
        voteOption.push(option); //e.g. "yes"/"no"/other

        return true;
    }

    //GetterFunctions
    function getVoteOptions(uint index) public view returns(string memory){
        return voteOptions[index]; //e.g. "yes"/"no"/other
    }
}