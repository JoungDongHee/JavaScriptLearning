/**
 * Nullish Coalescing Operator (널 병합 연산자)
 * * 1. 배경: '||' 연산자는 0, "", false를 모두 거짓으로 취급하여
 * 의도치 않게 기본값이 덮어씌워지는 문제가 있었음 (ES11, 2020 도입)
 * 2. 특징: 오직 null과 undefined인 경우에만 우항(기본값)을 실행함
 */

let num = 0;

// [경우 A] Logical OR (||)
// 0은 Falsy이므로, '있음'에도 불구하고 '-1'이 할당됨 (버그 위험)
console.log(num || '-1'); // 출력: "-1"

// [경우 B] Nullish Coalescing (??)
// 0은 null이나 undefined가 아니므로, 유효한 값으로 인정되어 0이 유지됨
console.log(num ?? '-1'); // 출력: 0

// 실무 활용 예시
let undefinedVar;
let nullVar = null;
let emptyStr = "";

console.log(undefinedVar ?? 'default'); // "default"
console.log(nullVar ?? 'default');      // "default"
console.log(emptyStr ?? 'default');     // "" (빈 문자열을 값으로 인정!)
console.log(emptyStr || 'default');     // "default" (빈 문자열을 거짓으로 판단)