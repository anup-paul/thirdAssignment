//firstProblem
function kilometerToMeter(number) 
{
    var meter = number * 1000;
    if (meter < 0) 
    {
        return 'Negative value is not acceptable';
    }
    return meter;
}   
var kilometer = 89;
var result = kilometerToMeter(kilometer);
console.log(result);


//secondProblem
function budgetCalculator(watch, phone, laptop)
{
    if (watch < 0 || phone < 0 || laptop < 0)  //for negative input we use this function
    {
        return 'Enter positive value';
    }
    var watchBudget = watch * 50;
    var phoneBudget = phone * 100;
    var laptopBudget = laptop * 500;
    var total = watchBudget + phoneBudget + laptopBudget;
    return total;

}
var totalBudget = budgetCalculator(4, 5, 6);
console.log(totalBudget);


// thirdProblem
function hotelCost(number)
{
    if(number < 0)
    {
        return 'Negative Value doesnot exsist'   
    }
    else if(number <= 10)
    {
        var cost = number*100;
        return cost;
    }
    else if(number <= 20)
    {
        var firstPart = 10 * 100;
        var offerDay = number - 10;
        var secondPart = offerDay * 80;
        var total = firstPart + secondPart;
        return total;
    }
    else if(number > 20)
    {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var offerDay = number - 20;
        var thirdPart = offerDay * 50;
        var cost = firstPart + secondPart + thirdPart;
        return cost;  
    }
}
var totalDay = 40;
var totalCost = hotelCost(totalDay);
console.log(totalCost);


//fourthProblem
function megaFrined(friendsName) 
{
    if(friendsName.length == 0)        // use this condition for empty string
    {
        return "Empty string does not work";
    }
    var largeName = '';        //initialize empty string
    for (var i = 0; i < friendsName.length; i++) 
    {
        if (friendsName[i].length > largeName.length)   //compare array string lenght
        {
            largeName = friendsName[i];
        }
    }
    return largeName;
}
var friendsName = ['Sam', 'Pritam', 'Asif', 'Ripon', 'Sakkhor'];
var largestName = megaFrined(friendsName)
console.log(largestName);