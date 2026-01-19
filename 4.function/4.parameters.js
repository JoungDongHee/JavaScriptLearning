// 1. 매개변수 기본값 (Default Parameters)
// 인자가 전달되지 않거나 undefined일 때만 기본값이 적용됩니다.
function add(a = 1, b = 1) {
    console.log(`a: ${a}, b: ${b}`);
    // arguments는 전달된 '모든' 인자를 담고 있는 유사 배열 객체입니다.
    console.log('arguments:', arguments);
    return a + b;
}

add(1, 2, 3); // 3번째 인자 3은 a, b에는 할당되지 않지만 arguments에는 남음
add(undefined, 5); // a에 기본값 1이 적용됨 -> 1 + 5 = 6
add(null, 5);      // null은 값으로 취급되어 기본값이 무시됨 -> null + 5 = 5

// 2. Rest 매개변수 (Rest Parameters)
// 나머지 인자들을 진짜 '배열'로 모아줍니다. (ES6 권장 방식)
function sum(a, b, ...numbers) {
    console.log('첫 번째(a):', a);
    console.log('두 번째(b):', b);
    console.log('나머지(numbers):', numbers);
}

// 3. 매개변수의 개수 확인
console.log('add 함수의 매개변수 개수:', add.length); // 0 (기본값이 설정되면 length에서 제외됨)
function basic(x, y) {}
console.log('basic 함수의 매개변수 개수:', basic.length); // 2