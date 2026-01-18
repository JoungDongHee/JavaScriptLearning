// typeof 데이터 타입을 확인할수 있다.
// 값을 타입 문자열로 반환
// 자바스크립트는 동적 타입이기 때문에 할당된 값에 따라 타입이 정해진다.
// Java 는 정적 타입 이기 때문에 최초 변수 선언시 선언된 타입으로만 데이터의 저장이 가능하다.
// int variable = 10; 은 int 타입으로 선언한 변수이며
// variable 는 int 타입만 저장이 되며 String 과 같은 다른 타입의 데이터는 저장할수 없다.
// 자바스크립트는 약한 타입 언어이기 도 하다.
// 자바는 강한타입 언어 이다.
let variable;

console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // String

variable = 123;
console.log(typeof variable); // number

variable = {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

variable = null; // null 은 null 타입이 아니라 object 타입이다.
console.log(typeof variable);