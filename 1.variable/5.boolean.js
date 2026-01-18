// 1. 불리언 타입과 네이밍 컨벤션
const isFree = true;
const isActivated = false; // 'Actived' 대신 'Activated'
const hasPermission = true; // 'has'도 자주 쓰이는 접두사입니다.

// 2. Falsy (거짓으로 취급되는 값들)
// 아래 8가지를 제외한 모든 값은 Truthy입니다.
console.log(!!0);              // false (숫자 0)
console.log(!!-0);             // false (음수 0)
console.log(!!0n);             // false (BigInt 0)
console.log(!!"");             // false (빈 문자열)
console.log(!!null);           // false (값이 없음)
console.log(!!undefined);      // false (정의되지 않음)
console.log(!!NaN);            // false (Not a Number)
// console.log(!!document.all); // false (특수 객체, 브라우저 환경에서만 존재)

// 3. Truthy (참으로 취급되는 값들)
console.log("============== True =============");
console.log(!!1);              // true
console.log(!!-1);             // true (0이 아닌 숫자는 모두 참)
console.log(!!"text");         // true
console.log(!!{});             // true (빈 객체는 참!)
console.log(!![]);             // true (빈 배열도 참! 주의 필요)
console.log(!!Infinity);       // true