let temp = 32;
temp = toFahrenhiet(temp);
console.log(temp)

function toCelsius(temp){
    return (temp-32) * (5/9);
}

function toFahrenhiet(temp){
    return temp * 9/5 + 32;
}