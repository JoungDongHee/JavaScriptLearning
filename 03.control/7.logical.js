// 논리 연산자
// && 그리고 AND  : 두개의 피 연산자가 true 일 경우 실행
// || 또는 OR : 하나의 피 연산자가 true 일 경우 실행
// ! 부정 단항연산자 //
// !! boolean 값으로 변환

let num = 8;
if(num >=0 && num < 9){ // &&
    console.log('👍');
}

if(num !== 8){
    console.log('👌👌')
}

console.log("========= AND && ==========")
console.log(true && true); //true
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false

console.log("========= OR  || ==========")
console.log(true || true); //true
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true


console.log("========= ! NOT ==========")
console.log(!true); //false
console.log(!false); // true
console.log(!'text'); // false
console.log(!!'text'); // true
