function prime(){
    var input = document.getElementById("myInput").value;
    var para = document.getElementById("para");

    var primeFactors = [];
    while (input % 2 === 0) {
        primeFactors.push(2);
        input = input/2;
    }
    var sqrtNum = Math.sqrt(input);
    console.log(sqrtNum);
    for (var i = 3; i <= sqrtNum; i++) {
        while (input % i === 0) {
            primeFactors.push(i);
            input = input / i;
        }
    }

    if (input > 2) {
        primeFactors.push(input);
    }
    
    para.innerHTML=primeFactors;

    console.log(primeFactors);
}
/*Divide the number with 2 till the remainder is not 0.
If its divisible with 2 then 2 to the primeFactors array.
Divide the number starting with 3 till the square root of the input number.
If its divisible with number then add to the primeFactors array.
At the end of the for loop if the number is greater than 2 then add the number to the primeFactors array.
*/