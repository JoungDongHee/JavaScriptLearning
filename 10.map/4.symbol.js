// Symbol 심벌
// 유일한 key 를 생성할수 있음
const map = new Map();
// const key1 = 'key'; // 문자열이 똑같기 때문에 동일한 key 로 간주됨
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1,'Hello');
console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면 Symbol ... for
// 전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(key1);
console.log(k1);

console.log(Symbol.keyFor(k1)); // Registry 에서 만들었기 때문에 값을 가져올수 있음
console.log(Symbol.keyFor(key1)); // 못가져옴

const obj = {[k1]:'hello', [Symbol('key1')]:1};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key1')]);