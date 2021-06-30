// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(
  arrayOfDrivers,
  returnFirstTwoDrivers = false,
  returnLastTwoDrivers = false
) {
  if (returnFirstTwoDrivers != false) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  }
  if (returnLastTwoDrivers != false) {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}
