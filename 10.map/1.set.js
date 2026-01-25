// Set
// set 은 중복키 값 불가능
const set = new Set([1,2,3,4,5]);
console.log(set);

console.log(set.size); // 5
console.log(set.has(1)); // true
console.log(set.has(6)); // false

set.forEach((item)=>{
    console.log(item);
})

//
console.log("=== values === ");
// 잘못된 문법
set.values().forEach((item)=>{
    console.log(item);
})

// 1. Set 객체 자체에서 forEach 호출 (권장)
set.forEach(item => console.log(item));

// 2. Iterator를 굳이 쓰고 싶다면 for..of 사용
const iterator = set.values();
for (const value of iterator) {
    console.log(value);
}

set.add(10);
console.log(set);

set.add("11"); // 자바와 다르게 set 또한 동적 타입으로 타입 상관없이 들어감
console.log(set);

set.delete("11");
console.log(set);

// 전부삭제
set.clear();
console.log(set);


const obj1 = { name: "🍎", price: 9 };
const obj2 = { name: "🍌", price: 19 };
const objs = new Set([obj1, obj2]);

// 상황 1: 기존 객체의 속성 변경
obj1.price = 10;
objs.add(obj1);
// 결과: objs.size는 여전히 2입니다.
// 이유: objs는 이미 obj1의 '주소'를 가지고 있고, 주소값은 변하지 않았기 때문입니다.

// 상황 2: 내용이 같은 새로운 객체 추가
const obj3 = { name: "🍌", price: 19 };
objs.add(obj3);
// 결과: objs.size는 3이 됩니다.
// 이유: 리터럴 {}로 생성된 obj3는 메모리상의 '새로운 주소'를 할당받기 때문입니다.