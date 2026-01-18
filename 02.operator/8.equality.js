// 1. 값만 비교 (동등 연산자 - 타입 변환 발생)
console.log(2 == '2');    // true
console.log(true == 1);   // true (true가 1로 변환됨)
console.log(false == 0);  // true (false가 0으로 변환됨)

// 2. 값과 타입 모두 비교 (일치 연산자 - 권장 방식)
console.log(2 === '2');   // false
console.log(true === 1);  // false

// 3. 객체의 참조 비교
const obj1 = { name: 'John' }; // 주소: 0x001
const obj2 = { name: 'John' }; // 주소: 0x002
const obj3 = obj1;             // 주소: 0x001 (복사)

console.log(obj1 === obj2);    // false (주소가 다름)
console.log(obj1 === obj3);    // true (주소가 같음)

// 4. 객체 내부 값 비교
// 객체의 '내용물'을 비교하려면 속성에 직접 접근해야 합니다.
console.log(obj1.name === obj2.name); // true ('John' === 'John')

// 5. 특이 케이스 (기억해두면 좋은 것)
console.log(null == undefined);  // true (둘 다 '비어있음'을 의미하므로 동등 취급)
console.log(null === undefined); // false (타입이 다름)
console.log(NaN === NaN);        // false (NaN은 자기 자신과도 일치하지 않는 유일한 값)