// // // function func1() {
// // //     console.log('Questa e una dichiarazione di funzione');
// // // }

// // // let func2 = function () {
// // //     console.log('Questa e un funzione espressione');
// // // }

// // // (function() {
// // //     console.log('Questa e un funzione auto invocante');
// // // }) ();

// // // function func3() {
// // //     let name = 'Mario Rossi';
// // //     return name;
// // // };

// // // let nome = func3;
// // // let mianome = nome();
// // // console.log(mianome);

// // function func4(){
// //     let name = 'Mario Rossi';
// //     function innerfunc() {
// //         let email  = 'c@km.com';
// //         return ('ciao sono'  + name + email);
// //     }
// //     return innerfunc;
// //     // console.log('ciao sono'  + name + email);
// // }
// // let saluto = func4();
// // let resp2 = saluto();
// // console.log(resp2);


// // function login() {
// //     let adminpass = '12345';
// //     function innerfunc(password) {
// //         let name  = 'Mario Rossi';
// //         if (password === adminpass) {
// //             return 'ciao sono'  + name;
// //         } else {
// //         return 'password errati!';
// //         }
// //     }
// //     return innerfunc;

// // }


// // let mylogin = login();
// // console.log(mylogin);
// // let resp = mylogin('12345');
// // console.log(resp);


// // // arrow function

// // let func5 = function(name2, lastname) {
// //     console.log('Questa e un funzione ' + name2 + lastname);
// // }

// // let  arrowfunc = (name,lastname) =>{
// //     console.log('Questa e un funzione ' + name + lastname);
// // }


// let x = 'mario';
// // let arr = [ 25, 'ciao', true , [], object];
// let arr = [ 'abc', 'ciao', 'epicode'];
// let arr2 = new Array('abc', 'ciao', 'epicode'); // correct way
// // arr[1] = 'nuovo';
// arr.push('nuovo elemento'); // inserici alle fine
// arr.unshift('nuovo elemento2'); // inserici all inizio
// arr.pop();//togliere, rimouve all fine
// arr.shift(); //rimouve al'inizio
// arr.splice(0,2, 'add');  //  si comincia a indice 0 and rimouve 2 elementi, terzo parametro e sostuiisce qualcosa
// arr.splice(2,0, 'add'); //se vnon vuoi rimouvere niente
// arr.sort();
// let newarray = arr.concat(arr2); //add 2 arrays insieme
// let str = arr.toString();
// let c = arr.indexOf('add');
// let c2 = arr.lastIndexOf('add'); // last palce of a value
// console.log(c);
// console.log(c2);
// console.log(newarray);
// console.log(arr);
// console.log(arr2);
// console.log(arr.length);
// let arrMod = arr.slice(1,3)
// console.log(str);
// console.log(arrMod);


// // function miafunc() {
// //     console.log(arguments.length);
// //     console.log(arguments[0] +arguments[1]  + arguments[2] );
// // }
// // miafunc(2,5,8,9,15)

// function miafunc(mioarr) {
//     console.log(mioarr.length);
//     console.log(mioarr[2]);
// }
// miafunc(arr);

// let myStr = "Ciao a tutti, questa e una stringa     ";
// let myStr2 = new String("Ciao a tutti, questa e una stringa");
// let myStr3 = myStr.charAt(8);
// console.log(myStr3);
// console.log(myStr.concat('FINE'));
// console.log(myStr.trim());
// console.log(myStr.toUpperCase());
// console.log(myStr.split(' '));
// console.log(myStr.replace('tutti', 'xxxxx'));
// console.log(myStr.slice(0, 8));


// let numArr = [5, 98, 62, 70, 42, 3];
// let number = Math.random()*30;
// console.log(Math.ceil(number));
// console.log(Math.floor(number));
// console.log(Math.round(number));
// console.log(number);
// console.log(Math.abs(-25));
// console.log(Math.min(...numArr));  // .. to deconstruct an array

// console.log(numArr);
// console.log(...numArr);


function functionX() {
    let string = document.getElementById('text').value;
    document.getElementById('result1').innerHTML = (string.toUpperCase());
    document.getElementById('result1a').innerHTML = (string.toLowerCase());
    document.getElementById('result1b').innerHTML = (string.split(' '));
    let convertarray = string.split(' ');
    document.getElementById('result1c').innerHTML = convertarray[1] + ' ' + convertarray[3]
    let newarray = [convertarray[1] , convertarray[3]];
    document.getElementById('result1d').innerHTML = convertarray.concat(newarray);
    console.log(string);
    // printfunctionX(string);
} 

// function printfunctionX(string) {
//     document.getElementById('result1').innerHTML = string;
// }

let arr = [ 'Marco', 'Gio', 'Pietro' , "Dani", 'Antonio'];
document.getElementById('result2').innerHTML = arr;
document.getElementById('result2a').innerHTML = (arr[3]);
arr[5] = 'Jimmy';
document.getElementById('result2b').innerHTML = arr;
document.getElementById('result2c').innerHTML = arr.length;


let numarr = [ '33', '62', '98' , "54", '3'];
document.getElementById('result3').innerHTML = numarr;
document.getElementById('result3a').innerHTML = Math.max(...numarr);
document.getElementById('result3b').innerHTML = Math.min(...numarr);
document.getElementById('result3c').innerHTML = multiplicazione(numarr[0], numarr[4]);


function multiplicazione(x,y) {
    let result = x * y;
    return result;
}


// document.getElementById('result3a').innerHTML = Math.floor(numarr);
// 
// document.getElementById('result3c').innerHTML = numarr;


let otharray = [ 'red', 'green', 'yellow' , "blue", 'orange'];
document.getElementById('result4').innerHTML = otharray;
otharray.push('black');
document.getElementById('result4a').innerHTML = otharray;
otharray.pop();
document.getElementById('result4b').innerHTML = otharray;
otharray.shift();
document.getElementById('result4c').innerHTML = otharray;
otharray.splice(2, 0, "purple");
document.getElementById('result4d').innerHTML = otharray;
// document.getElementById('result4c').innerHTML = otharray;
// document.getElementById('result4d').innerHTML = otharray;