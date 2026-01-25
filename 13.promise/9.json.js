/**
 * JSON (JavaScript Object Notation)
 * - 데이터를 전송하기 위한 텍스트 기반의 포맷
 */

const ellie = {
    name: 'ellie',
    age: 20,
    eat: () => { console.log("eat"); }, // 메서드(함수)
};

// 1. 직렬화 (Serialization): 객체 -> 문자열
// 순수 데이터만 추출되며, 함수/Symbol/undefined는 제외됨
const json = JSON.stringify(ellie);
console.log(typeof json); // "string"
console.log(json);        // '{"name":"ellie","age":20}'

// 2. 역직렬화 (Deserialization): 문자열 -> 객체
// 텍스트를 기반으로 새로운 객체를 생성함
const obj = JSON.parse(json);
console.log(obj);         // { name: 'ellie', age: 20 }
// obj.eat();             // ❌ 에러: 데이터만 복구되었으므로 함수는 존재하지 않음