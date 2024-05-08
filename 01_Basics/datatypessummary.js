// primitive for stack memory and heap for non-primitive data types in JS
let youtube_channel = "TariqFarooq"
let another_name = youtube_channel
// console.log(youtube_channel);
// console.log(another_name);
// after manipulation
another_name = "New Name"
// console.log("After Changes");
// console.log(youtube_channel);
// console.log(another_name);
/*
Stack Memory (Primitive Data Types) and Heap Memory (Non-Primitive Data Types)
*/
const id = Symbol("123")
const new_id = Symbol("123")
// console.log(id === new_id);
const big_number = 123456789123456789n
// console.log(big_number);
// console.log(typeof big_number);

const heros = ["Captain America", "Thor", "Iron Man", "Hulk"]
// console.log(heros);
let std_registration ={
    name:"UF",
    id:12345,
    age:29
}
// console.log(std_registration["name"]);

function intro(params) {
    console.log("Hello Function");
}
intro()


