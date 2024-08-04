console.log("Hello world");

console.log('My first code');

//variables

var a=5;
console.log(a);
{
    var a=34;
    console.log(a);
}
var a=64;
console.log(a);


var a=5;
var a=3;
console.log(a);

let b=56;
{
    var a=34;
    console.log(a);
    let b=90;
    console.log(b);
}
console.log(b);
//let b=34;
//console.log(b);

n=90;
console.log(n);

console.log(typeof(b));

let c=12;
console.log(typeof(c));


var firstname='Gopika';
console.log(typeof(firstname));

var firstname='Chiran';
console.log(typeof(firstname));


let bool=false;
console.log(typeof(bool));

var g;
console.log(typeof(g));

var g='';
console.log(typeof(g));


//Arrays

var arr1=['pine','Acacia','Teak',10];
console.log(arr1);
console.log(arr1.length);

var arr1=['pine','Acacia','Teak',23];
console.log(arr1[1]);
console.log(arr1[3]);


arr1.push('Rosewood');
console.log(arr1);


arr1.pop('rosewood');
console.log(arr1);


//Objects

//let person={
 //   fname:'Maya',
 //   age : 80,
   // location : 'TVM'
//}
//console.log(person.age)


let person=new Object();
person.fname='Miya';
person.age=22;
console.log(person)


let car=new Object();
car.name='Hyundai';
car.color='red';
console.log(car);


//Array of Objects


let arr2=[{
       fname:'Maya',
       age : 80,
      location : 'TVM'
},{
      fname:'Miya',
       age : 40,
       location : 'Kochi'

}]

console.log(arr2[1].age)


//let num1=12;
//let num2=10;
//num=num1+num2;
//console.log(num);


//let num=Number(10);
//console.log(num);


//Function

function display(fname) {
    console.log('welcome '+fname+'to functions');
    
}
display('Gopika');


//Add 2 functions

//function add_val(a,b) {
   // var sum=a+b;
    //console.log(sum)
   // return sum;
//}
// Multiplication

 //var result= multi_val(10,20);
 //console.log('The Multi is +result');

 //function multiply(a,b) {
   // var z=a*b;
   // return z;
//}

 //result= multiply(10,20);
 //console.log(result);

function multiply(x,y)
{
    var z=x*y;
    return z;
}
result=multiply(3,5);
console.log(result);


var ab=7;
var abc=ab++; //post increment
console.log(ab);
console.log(abc);

var ab=7;
var abc=++ab; //pre increment
console.log(ab);
console.log(abc);

var exp=(4*7)-8**2+9;
console.log(exp)
var tt=56;
var tm='56';


//conditional statement


if (tm>tt && tm===tt) {
    console.log('value is greater or equal');
    
}

else{
    console.log('value is less ');
}
    
var result1=exp>-30?'value is greater than zero':'value is less than zero';
console.log(result1);



    
//Function

function display(fname) {
    console.log('Welcome  '  +fname+'  to Function');
    
}
display('Gopika');

// Add 2 Numbers

function add(a,b) {
    var c=a+b;
    return c;   
}
result=add(10,20);
console.log(result);

// Add 3 Numbers

function add(a,b,c){
    var d=a+b+c;
    return d;
}
 result=add(10,20,30);
 console.log(result);

 // Substract 2 No:

 function sub(a,b) {
    var c=a-b;
    console.log(c);
 }
 result=sub(30,10);

 //Multiply 2 no:

 function mul(x,y){
    var z=x*y;
   // return z;
   console.log(z);
 }
 result=mul(10,5);
 
 
    //post increment

    var ab=7;
    var abc=ab++;
    console.log(ab);
    console.log(abc);


    //pre increment

    var ab=7;
    var abc=++ab;
    console.log(ab);
    console.log(abc);
 


    //Conditional Statement

    var tt=56;
    var tm='56';

    if (tt>tm) 
       {
        console.log("The Value is: Greater");
        
    } 
    else if(tt===tm){

        console.log("The value is equal ");
    }
    else {
        console.log("The Value is:Less");
        
    }

    if (tt>tm && tt===tm)
        {
         console.log("The Value is: Greater or Equal to");
         
     } 
     else {
        console.log("The Value is:Less");
        
    }

var result1=exp>-30?'value is greater than zero':'value is less than zero';
console.log(result1);


//object

let stud=new Object;
{
stud.fname='Manu',
stud.age=56,
stud.place='TVM'
}
console.log(stud);
console.log(stud.age)

//Arrays

//
let month=['January','February','March','April'];
console.log(month);
console.log(month.length);
console.log(month[2]);


// Function

function sum(a,b){
  var  c=a+b;
  return c;
    
}
result=sum(10,20);
console.log(result);

function add(x,y){
    var z=x+y;
    console.log(z);
}
result=add(30,10)


//loops
//print 1 to 10

for(let i=0;i<10;i++)
{
    console.log(i+1);
}

var array=[1,45,34,56,78];
for(let i=0;i<array.length;i++){
console.log(array[i]);
}

var obj={fname:'Heera',age:34,place:'tvm'}
// for in loop

for(const i in obj){
    console.log(obj[i]);


}

for(let i of array){
    console.log(i);
}

//while loop

let i=0;
while(i<10){
    console.log(i+1);
    i++;
}


//do while loop

let r=1;
do{
    console.log(r)
    r++;
}while(r<=10);




