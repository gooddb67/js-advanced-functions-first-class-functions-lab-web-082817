// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare){
  return function(fare){
    return fare * fare;
  }
}

const fareDoubler = function(fare){
  return fare * 2
}

const fareTripler = function(fare){
  return fare * 3
}

const selectDifferentDrivers = function(drivers, fnc){
  return fnc(drivers);
}
