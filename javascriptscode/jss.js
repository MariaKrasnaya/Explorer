document.addEventListener("DOMContentLoaded", function(){

// = означает присваивания
// != означает не равно
// == не строгое равенство
// === строгое равенство (сравнивает типы данных)


// console.log(5 > 6);// false
// console.log ('5'==5); // true
// console.log ('5'===5);// false поскольку строчный и булёвый тип при строгом равенстве не равны точно
// console.log ('hi'==5); // false даже при не строгом равенстве он видит, что слово и число это уж точно разное 


// // true=1, false=0 по дефолту в js

// console.log(true==1);// true
// console.log(false==0);// true
// console.log(true===1);// false
// console.log(false===0);// false

// console.log( null === undefined); // false 
// console.log( null == undefined); // true два типа ошибок равны в нестрогом равенстве(undefined это тип ошибки, когда не указано значение переменной; null это тип ошибки, когда вообще не указана функция) 

// let year = prompt ('В каком году публикация была?', '');

// if(year==2015){
// console.log("wow cool!") // это вариант когда да
// }
// else{
// console.log("oy nooo")
// };

let age=prompt("how old are u?", '')

if(age<=5){
  console.log('wow so young')
}
else if(age<18){
console.log('hi bro')
}
else {
console.log('nice age');
};

// || (ИЛИ), && (И), ! (НЕ)

console.log(true||true); // true
console.log(false||true); // true
console.log(true||false);// true
console.log(false||false);// false

console.log (true && true); // true
console.log (false && true); // false
console.log (true && false); // false
console.log (false && false); // false

// в () скобках аргумент, он заменяем

let us = {
  name: "John",
  age: 30,
  hobby: "tennis"
};

console.log(us.name)
console.log(us.age)
console.log(us.hobby)


                                      


function personaj (name, age) {
return {
name: name, 
age: age,
}
}

let usernash = personaj("POLLy", 34);
console.log(usernash)

});