/**
 * Created by jared.white459 on 11/10/16.
 */
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var sum = (num1 + num2);
var product = (num1 * num2);
var difference = (num1 - num2);
var quotient = (num1 / num2);
var modulus = num1 % num2;

function add() {
    document.getElementById("sumAnswer").value = sum;
}
function sub() {
    document.getElementById("subAnswer").value = difference;
}
function multiply() {
    document.getElementById("multAnswer").value = product;
}
function divide() {
    document.getElementById("divAnswer").value = quotient;
}
function mod() {
    document.getElementById("modAnswer").value = modulus;
}
function display() {
    document.getElementById("display").value = num1 + " " + num2;
}