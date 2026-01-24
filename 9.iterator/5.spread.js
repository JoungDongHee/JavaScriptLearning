// Spread 연산자 이건 자바에서 못본듯?
// 모든 Interable 은 Spread 될수 있다.
// 순회가 가능한 모든 것들은 펼처 질수 있다.
// func(...iterable)
// [...iterable]
// {...iterable}
// EcamaScript 2018

function add(a,b,c){
    return a+b+c;
}

const nums = [1,2,3];
console.log(add(nums[0], nums[1],nums[2]));
console.log(add(...nums));

// Rest Parameters
//
function sum(a,b,...nums){
    console.log(nums);
}

sum(1,2,0,1,2,5,5);

// Array concat
const fruits1 = ['🍏','🥝'];
const fruits2 = ['🍓','🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1,'🍓',...fruits2];
console.log(arr);

// Obejct
const original = {name : 'Ellie',age:20,home : {
    address : 'home'
    }};
const update = { // 새로운 오브 젝트 생성
    ...original, // 얕은 복사 이다.
    job : 's/w enginer',
}
update.home.address = 'changeHome';
console.log(original);
console.log(update);