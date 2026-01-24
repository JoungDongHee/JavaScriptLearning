// const multiple = {
//     [Symbol.iterator]() {
//         const max = 10; // 반복 횟수
//         let count = 0;  // 0부터 시작하기 위해 카운터 설정
//
//         return {
//             next() {
//                 // done: true가 되면 순회가 종료됨
//                 const isDone = count >= max;
//                 // value: 현재 카운트의 2배를 계산하고 카운트 증가
//                 const currentVal = isDone ? undefined : count * 2;
//
//                 if (!isDone) {
//                     count++; // 다음 순회를 위해 증가
//                 }
//
//                 return { value: currentVal, done: isDone };
//             }
//         };
//     }
// };

// * 는 generator
// yield 는 호출시 next 를 호출 해야만 다음 로직이 수행된다.
// 다음 코드에서는 다음 호출이 진행되어야 다음 for 로직이 수행된다.
function* multipleGenerator() {
    for(let i = 0;i<10;i++){
        console.log(i);
        yield i**2;
    }
}

const multiple = multipleGenerator();
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
multiple.throw("error"); // 내부로 에러를 던짐
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
