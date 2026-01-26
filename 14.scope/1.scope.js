// 1. 블록 스코프 (Block Scope)
{
    const a = 'a';
    console.log(a);
}
// console.log(a); // ❌ ReferenceError: a는 위 중괄호가 끝나면서 소멸됨

// 2. 전역 스코프 (Global Scope)
const b = 'b';
console.log(b); // ✅ 출력: 'b' (어디서든 접근 가능)

// 3. 함수 스코프 (Function Scope)
function print() {
    const message = "Hello World!";
    console.log(message); // ✅ 함수 내부에서는 자유롭게 접근
}
// console.log(message); // ❌ ReferenceError: message는 함수 실행이 끝나면 사라짐


// 4. 매개변수 스코프 (Parameter Scope)
function sum(a, b) {
    // 여기서의 a, b는 함수 내부에서만 쓰이는 '지역 변수'입니다.
    return a + b;
}

/**
 * [주의!] 아래의 결과는?
 * 1. a: 위쪽 블록 스코프에서 이미 죽었으므로 찾을 수 없음 (ReferenceError)
 * 2. b: 전역 변수 const b = 'b'가 살아있으므로 접근 가능
 */
// console.log(a, b);