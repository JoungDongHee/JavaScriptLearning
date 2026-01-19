// 1. 콜백 함수 (Callback Functions)
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 2. 고차 함수 (Higher-Order Function)
// action이라는 '함수의 주소값'을 인자로 받습니다.
function calculator(a, b, action) {
    // 내부에서 필요한 시점에 호출 (Inversion of Control)
    const result = action(a, b);
    console.log(`사용한 함수: ${action.name || '익명 함수'}`);
    console.log(`결과값: ${result}`);

    return result;
}

// 3. 실행
// 주의: add()라고 쓰면 '결과값'이 전달되므로, '이름(add)'만 전달해야 합니다.
calculator(1, 2, add);      // add의 참조값 전달
calculator(3, 4, multiply); // multiply의 참조값 전달

// 익명 함수를 직접 전달하는 방식 (Java의 람다와 유사)
calculator(10, 5, (a, b) => a - b);