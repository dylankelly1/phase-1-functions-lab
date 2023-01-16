// Code your solution in this file!

const hq = 42

const feet = 264

function distanceFromHqInBlocks(pickup) {
    if (pickup > hq) {
        return pickup - hq
    }
    else if (pickup < hq) {
        return hq - pickup
    }
  }


  function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * feet
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  

  function distanceTravelledInFeet(start , destination) {
    if (start < destination) {
        return (destination - start) * 264
    }
    else {
        return (start - destination) * 264
    }
    //returns the number of feet traveled
  }


  function calculatesFarePrice(start, destination){
    let calculatesFarePrice;
    let calculatesFeet= distanceTravelledInFeet(start, destination);
   if (calculatesFeet < 400 ){
        return calculatesFarePrice = 0;
   } else if (calculatesFeet > 400 && calculatesFeet < 2000){
       calculatesFarePrice = calculatesFeet - 400;
       return (calculatesFarePrice * 0.02);
   }
   else if (calculatesFeet > 2000 && calculatesFeet < 2499){
       calculatesFarePrice = 25;
       return calculatesFarePrice;
   }
   else if (calculatesFeet > 2500){
       return 'cannot travel that far';
   }

}