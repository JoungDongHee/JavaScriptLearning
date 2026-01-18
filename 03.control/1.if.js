// 1. 표준 if-else if-else 구조
let fruit = 'orange';

if (fruit === 'apple') {
    console.log('🍎');
} else if (fruit === 'orange') {
    console.log('🍊'); // 실행됨
} else {
    console.log('정해지지 않은 과일입니다.');
}

// 2. Truthy & Falsy의 조건문 활용
// 0, '', null, undefined, NaN은 모두 false로 평가됩니다.
let count = 0;

if (count) { // count가 0이므로 Falsy -> 실행되지 않음
    console.log('숫자가 0이 아닙니다.');
}

let name = '엘리';
if (name) { // 빈 문자열이 아니므로 Truthy -> 실행됨
    console.log(`이름은 ${name}입니다.`);
}

// 3. 중첩 조건문 (Nested If)
let isMember = true;
let price = 10000;

if (isMember) {
    if (price > 5000) {
        console.log('VIP 할인이 적용됩니다.');
    }
}