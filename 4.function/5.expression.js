// 1. 함수 선언문 (Function Declaration)
// 호출을 정의보다 먼저 할 수 있습니다 (호이스팅).
console.log(multiply(2, 3));
function multiply(a, b) {
    return a * b;
}

// 2. 함수 표현식 (Function Expression)
// 변수에 할당된 이후에만 호출 가능합니다.
const add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 3. 화살표 함수 (Arrow Function)
// 한 줄일 때 { }와 return 생략 가능
const subtract = (a, b) => a - b;
console.log(subtract(10, 5));

// 4. IIFE (즉시 실행 함수 표현식)
// 전역 변수 오염을 막기 위해 작성과 동시에 실행
(function () {
    const privateVar = '외부에서 볼 수 없음';
    console.log('IIFE 실행됨!');
})();