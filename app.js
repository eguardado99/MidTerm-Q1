var num1 = prompt('Enter a number between 5 & 20');

var output = document.getElementById('output')
var topNums = document.getElementById('topNum')
var leftNums = document.getElementById('leftNum')

function getNumbers() {

    if (num1 < 5 || num1 > 20) {
        return ('<div class="error"> the valid input is a number between 5 and 20, please refresh your page to start again </div>')
    } else {
        var result = '\n';
        for (var i = 1; i <= num1; i++) {
            for (var j = 1; j <= num1; j++) {
                if (i===j){
                    result += '<yel>' + (i * j) + '</yel>'
                }else {
                    result += '<num>' + (i * j) + ' </num>';
                }
            }
            result += '<br>'
        }
        return result;
    }
}

function topNum() {
    //new line
    if (num1 < 5 || num1 > 20) {
        return ('')
    } else {
    //new line
    var result = '';
    for (var i = 1; i <= num1; i++) {
        result += '<top>' + i + ' </top>';
    }
    return result;
    }
}
function leftNum() {

    //new line
    if (num1 < 5 || num1 > 20) {
        return ('')
    } else {
    //new line

    var result = '';
    for (var i = 1; i <= num1; i++) {
        result += '<left>' + i + ' </left>'; result += '<br>'
    }
    
    return result;
}
}

var leftNumbers = leftNum();
leftNums.innerHTML = leftNumbers;

var topNumbers = topNum();
topNums.innerHTML = topNumbers;

var numbers = getNumbers();
output.innerHTML = numbers;