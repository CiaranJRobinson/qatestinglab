module.exports = {
    returnTwo: function returnTwo(){
        return 2;
    },
    greeting: function greeting(name){
        return "Hello, "+ name;
    },
    add: function add (num1, num2){
        let result = num1 + num2;
        return (result);
    },
    subtract: function subtract (num1, num2){
        let result = num1 - num2;
        return (result);
    },
    multiply: function multiply (num1, num2){
        let result = num1 * num2;
        return (result);
    },
    divide: function divide (num1, num2){
        let result = num1 / num2;
        return (result);
    },
}