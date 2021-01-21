// https://github.com/MdMahfujHasan/assignment-3-js-problem-solving

// problem #1 --> kilometerToMeter
function kilometerToMeter (kilometer){
    if(kilometer<0){
        return "Kilometer can't be negative. Insert a positive integer number."
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(3);
console.log(result);
/* for testing(code) purposes.
var positiveInt = kilometerToMeter(5);
var negativeInt = kilometerToMeter(-5);
console.log(positiveInt);
console.log(negativeInt);
*/

// problem #2 --> budgetCalculator
function budgetCalculator (watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    //(if loop) to eliminate any negative numbers.
    if(watch<0 || phone<0 || laptop<0){
        return "Insert a positive integer number.";
    }
    //(else if loop) to eliminate floating numbers. The remainder(div by 1) of all positive int num is 0.
    else if(watch%1 !==0 || phone%1 !== 0 || laptop%1 !== 0){
        return "Electronics can't be floating number. Insert a positive integer number.";
    }
    else{
        var watchCost = watchPrice * watch;
        var phoneCost = phonePrice * phone;
        var laptopCost = laptopPrice * laptop;
        var totalCost = watchCost + phoneCost + laptopCost;
    }
    return totalCost;
}
var totalBudget = budgetCalculator(2, 3, 5);
console.log(totalBudget);
/* for testing(code) purposes.
var totalBudget1 = budgetCalculator(1, 1, 1);
var totalBudget2 = budgetCalculator(1, 1.5, 1);
var totalBudget3 = budgetCalculator(1, 1, -1);
console.log(totalBudget1);
console.log(totalBudget2);
console.log(totalBudget3);
*/

// problem #3 --> hotelCost
function hotelCost (stayNumOfDays){
     totalHotelCost = 0;
    // (if loop) to eliminate negative int/float numbers as well as positive floating numbers.
     if(stayNumOfDays < 0 || stayNumOfDays%1 !==0){
         return "Number of days to stay in hotel can't be negative/floating number. Insert a positive integer number."
    }
     else if(stayNumOfDays <= 10){
         var totalHotelCost = stayNumOfDays * 100;
    }
    else if(stayNumOfDays <= 20){
        var first10DaysCost = 10 * 100;
        var remainingDays = stayNumOfDays - 10;
        var remainingDaysCost = remainingDays * 80;
        var totalHotelCost = first10DaysCost + remainingDaysCost;
    }
    else{
        var first10DaysCost = 10 * 100;
        var second10DaysCost = 10 * 80;
        var remainingDays = stayNumOfDays - 20;
        var remainingDaysCost = remainingDays * 50;
        var totalHotelCost = first10DaysCost + second10DaysCost + remainingDaysCost;
    }
    return totalHotelCost;
}
var totalCost = hotelCost(22);
console.log(totalCost);
/* for testing(code) purposes.
var totalCost1 = hotelCost(10);
console.log(totalCost1);
var totalCost2 = hotelCost(11);
console.log(totalCost2);
var totalCost3 = hotelCost(20);
console.log(totalCost3);
var totalCost4 = hotelCost(21);
console.log(totalCost4);
var totalCost5 = hotelCost(-10);
console.log(totalCost5);
var totalCost6 = hotelCost(10.5);
console.log(totalCost6);
*/

// problem #4 --> megaFriend
function megaFriend(arr = ['Rahman', 'Sabbir', 'Kamal Hasan', 'Kamrul Hossain']){
  var length = 0;
  var longest;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > length) {
      var length = arr[i].length;
      var longest = arr[i];
    }
  }
  return longest;
}
var longestName = megaFriend(arr = ['Rahman', 'Sabbir', 'Kamal Hasan', 'Kamrul Hossain'])
console.log(longestName);