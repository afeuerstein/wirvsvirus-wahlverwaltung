pragma solidity ^0.6.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/lifecycle/Pausable.sol";
import "./eVoting.sol";

/**
 * @title "e-Voting Factory"
 * @notice The e-Voting Factory allows political decision-makers to create their votes
 * @dev This is untested code. DO NOT USE FOR PRODUCTION
 */
contract eVotingFactory is Ownable, Pausable{
    //Variables
    address[] private eVotingAddresses;

    //Events
    event LogNewVotingCreated(
        address indexed creator,
        address indexed votingAddress,
        string voteName
    );

    //Functions
    function createNewVoting(string memory _voteName) public whenNotPaused returns(address){
        eVoting newVoting = new eVoting(_voteName);

        emit LogNewVotingCreated(
            msg.sender,
            address(newVoting),
            _voteName
        );

        return address(newVoting);
    }

    //Getter-Functions
    function getVotingCount() public view returns(uint){
        return eVotingAddresses.length;
    }

    function getVotingsByIndex(uint index) public view returns(address){
        return eVotingAddresses[index];
    }
}