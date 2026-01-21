// 얕은 복사 - 객체는 메모리 주소를 복사
// 자바스크립트에서는 복사할때는 항상 얕은 복사가 이뤄진다.
// Array.from , concat , slice , spread(....) , Object.assign 모두 얕은 복사 발생
const pizza = {name:'🍕',price:2};
const ramen = {name: '🍜',price:3};
const sushi = {name: '🍣',price:1};

const store1 = [pizza,ramen]
const store2 = Array.from(store1); // from 을 이용해 새로운 배열 반환

console.log(store1);
console.log(store2);
console.log(store2 === store1); // false

console.log("====== 값 추가 ======");

store2.push(sushi);
console.log(store1);
console.log(store2); // 새로운 배열이기 때문에 store1 에는 변화가 없다.

console.log("====== 객체 의 속성의 값 변경 ======");
// store1 과 store2 는 다른 객체이지만
// 내부에 있는 pizza 와 ramen 은 같은 메모리 주소를 참조 하고 있다. 그래서 store1 과 store2 에 모두 영향을 주게된다.
// 즉 from 으로 만든 객체는 Array 배열만 다른 객체로 반환할뿐 내부의 객체 는 같은걸 참조하게 된다.
pizza.price = 10;
console.log(store1);
console.log(store2);

console.log("====== 표준 값 복사 ======");

let structuredClone1 = structuredClone(store1);
console.log(structuredClone1);