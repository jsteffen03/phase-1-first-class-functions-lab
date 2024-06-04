const returnFirstTwoDrivers = function(names) {
    return names.slice(0,2);
} 

const returnLastTwoDrivers = function(names) {
    return names.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(distance){
    return function(fare) {
        return fare * distance;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, choose) {
    return choose(names);
}
