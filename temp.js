document.getElementById('subButton').onclick = function(){

    let temp;
    let result;

    if(document.getElementById('cButton').checked){
        temp = document.getElementById('temp').value;
        temp = Number(temp);
        result = (temp-32) * (5/9);
        document.getElementById('tempLabel').innerHTML = result + "°C"; 
    }
    else if(document.getElementById('fButton').checked){
        temp = document.getElementById('temp').value;
        temp = Number(temp);
        result = temp * 9/5 + 32;
        document.getElementById('tempLabel').innerHTML = result + "°F"; 
    }
    else{
        document.getElementById('tempLabel').innerHTML = "Select a Unit to Proceed!!"
    }
}