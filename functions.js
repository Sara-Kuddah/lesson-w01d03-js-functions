//Lab1
const youRock = function(name){
    return ("You rock "+name+" !");
};


const square= function(num){
return (Math.pow(num,2));
};

const cube= function(num){
    return (Math.pow(num,3));
}

const toTheFourth= function(num){
    return (Math.pow(num,4));
}

//Lab2
const rainDrop=function(num){
    let output = '';
    output += num % 7 === 0 ? 'Plong' : '';
    output += num % 5 === 0 ? 'Plang' : '';
    output += num % 3 === 0 ? 'Pling' : '';
    return output ? output : num;
}

//Lab3
const fizzBuzz = function(num){
    let output = '';
    output += num % 3 === 0 ? 'Fizz' : '';
    output += num % 5 === 0 ? 'Buzz' : '';
    return output ? output : num; 
}