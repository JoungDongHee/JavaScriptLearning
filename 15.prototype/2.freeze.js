// 객체의 불변성
// Object.freeze 추가 , 삭제 , 쓰기 , 속성 재정의 불가능
// 단 Object.freeze 는 1단계 까지만 불변성을 정의하며 owner:ellie 와 같이 중첩된 객체는 불변성 설정을 못한다.
const ellie = {name:'엘리'};
const dog = {name:'와우',emoji:'🐶',owner:ellie}

Object.freeze(dog); // 불변성을 유지하고자 하는 객체 추가
dog.name = '멍멍'; // 수정 불가능
console.log(dog);
dog.age = 4; // 추가 불가능
console.log(dog)

ellie.name = '엘리얌';
console.log(dog)

// Object.seal
// 객체의 값 수정 가능 , 추가 , 삭제 , 속성 재정의 불가능
const cat = {...dog};
// Object.assign(cat, dog); // 스프레드 연산 으로 복사 해도 동일함
console.log(cat);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji; // 삭제 불간,ㅇ
console.log(cat);

console.log(Object.isFrozen(dog)) // true
console.log(Object.isFrozen(cat)) // false
console.log(Object.isSealed(dog)) // true ? 프로즌이 seal 의 상위 버전이어서 true 인듯?
console.log(Object.isSealed(cat)) // true

// 상속 불가능
// 추가 불가능
const tiger = {name : '어흥'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(dog))
tiger.name = '어흐응'
console.log(tiger);
delete tiger.name
tiger.age = 1;
console.log(tiger);