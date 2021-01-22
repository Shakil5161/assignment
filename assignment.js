function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else {
        return 'Plz Enter Positive Value';
    }
}

function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var totalWatch = Math.floor(watch) * 50;
        var totalMobile = Math.floor(mobile) * 100;      // here item Can't be fraction number so if you put fraction number then is will convert floor
        var totalLaptop = Math.floor(laptop) * 500;
        var total = totalWatch + totalMobile + totalLaptop;
        return total;
    }
    else {
        return "Item Can't be negative";
    }
}

function hotelCost(day) {
    var pay = 0;
    if (day >= 0 && day <= 10) {
        pay = Math.ceil(day) * 100;      // here day will be fraction so it will be ceil for pay
        return pay;
    }
    else if (day >= 11 && day <= 20) {
        var upToTwenty = Math.ceil(day) - 10;
        pay = (upToTwenty * 80) + 1000;
        return pay;
    }
    else if (day > 20) {
        var aboveTwenty = Math.ceil(day) - 20;
        pay = (aboveTwenty * 50) + 1800;
        return pay;
    }
    else {
        return "Day Can't Be Negetive Plz Enter Positive Number";
    }
}

function megaFriend(friendArray) {
    var friend = '';
    for (var i = 0; i < friendArray.length; i++) {
        if (friend.length < friendArray[i].length && friendArray.length >= 2) {
            friend = friendArray[i];
        }
        else {
            return 'plz enter string array & minimum 2 name';
        }
    }
    return friend;
}