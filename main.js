const studentUser = {
    age: 22,
    isStudent: true
};
const seniorUser = {
    age: 77,
    isStudent: false
};
const kidUser = {
    age: 5,
    isStudent: true
};
const adultUser = {
    age: 18,
    isStudent: false
};
const users = [studentUser, seniorUser, kidUser, adultUser];
const students = [studentUser, studentUser, studentUser];
const friends = [studentUser, adultUser, adultUser];
const ticketsPricing = {
    regular: 12,
    discounted: 8,
    group: 10
};

const regularCar = { numberOfWheels: 4 };
const motorcycle = { numberOfWheels: 2 };
const bicycle = { numberOfWheels: 2 };
const taxi = { numberOfWheels: 4, isTaxi: true };
const policeCar = { numberOfWheels: 4, isSpecialVehicle: true };
const policeMotorcycle = { numberOfWheels: 2, isSpecialVehicle: true };
const electricCar = { numberOfWheels: 4, isElectric: true };
const reliantRobin = { numberOfWheels: 3 };
const privateCompanyBus = { numberOfWheels: 8 };
const cityOwnedBus = { numberOfWheels: 8, isPartOfPublicTransport: true };

/*
Implement a isUserClassifiedForDiscount(person) function that takes an user object as an argument. It should return true for:
kids - 17 of age and below
seniors -  67 of age and above
students if they are under 26
only otherwise it should return false.
*/

let isClassified = function isUserClassifiedForDiscount(person) {
    if (person.age<=17 || person.age>=67 || (person.isStudent==true && person.age<=26)){
        return true;
    }return false;
}
console.log(isClassified(studentUser)); // true
console.log(isClassified(seniorUser)); // true
console.log(isClassified(kidUser)); // true
console.log(isClassified(adultUser)); //false

/*
Implement an isItCheaperToUseGroupTicket(arrayOfTravelers) function
that takes an array of users as an argument.
It should return true if it would be cheaper to buy a group ticket instead of an individual one,
otherwise it should return false. You can take pricing from ticketsPricing object.
Use isUserClassifiedForDiscount function you wrote in the previous exercise to determine if a user can buy discounted
ticket.
 */

function isItCheaperToUseGroupTicket(arrayOfTravelers) {
    let groupTicketCost = arrayOfTravelers.length * 10;
    let individualTicketsCost = 0;
    for (let i = 0; i <= arrayOfTravelers.length - 1; i++) {
        if (isClassified(arrayOfTravelers[i])==true) {
            individualTicketsCost += ticketsPricing.discounted;
        } else individualTicketsCost += ticketsPricing.regular;
    }
    return groupTicketCost < individualTicketsCost
}
console.log('funkcja druga');
console.log(isItCheaperToUseGroupTicket(users));
console.log(isItCheaperToUseGroupTicket(friends));

/*Implement isVehicleAuthorizedToUseBusLine(vehicle) function that takes vehicle object as an argument. It should return true for:
all vehicles that have 2 wheels
some of 4 wheel vehicles:
buses that are a part of public transport system
taxi cars
special vehicles
electric cars,
some 8 wheel vehicles:
vehicles that are a part of public transport system
	otherwise it should return false. */

function isVehicleAuthorizedToUseBusLine(vehicle){
    if (vehicle.numberOfWheels==2 || (vehicle.numberOfWheels==4 && (vehicle.isTaxi==true || vehicle.isPartOfPublicTransport==true
            || vehicle.isSpecialVehicle==true || vehicle.isElectric==true))
            || (vehicle.numberOfWheels==8 && vehicle.isPartOfPublicTransport)){ return true;
    } return false;
}
console.log('funkcja trzecia');
console.log(isVehicleAuthorizedToUseBusLine(regularCar));
console.log(isVehicleAuthorizedToUseBusLine(motorcycle));
console.log(isVehicleAuthorizedToUseBusLine(bicycle));
console.log(isVehicleAuthorizedToUseBusLine(taxi));
console.log(isVehicleAuthorizedToUseBusLine(policeCar));
console.log(isVehicleAuthorizedToUseBusLine(policeMotorcycle));
console.log(isVehicleAuthorizedToUseBusLine(electricCar));
console.log(isVehicleAuthorizedToUseBusLine(reliantRobin));
console.log(isVehicleAuthorizedToUseBusLine(privateCompanyBus));
console.log(isVehicleAuthorizedToUseBusLine(cityOwnedBus));

