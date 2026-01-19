// 1. 반환값이 없는 경우 (Implicit Return)
function add(a, b) {
    console.log('계산 중...');
    // return이 없으면 엔진이 암묵적으로 return undefined; 를 수행합니다.
}

const result = add(1, 2);
console.log(`반환값: ${result}`); // undefined

// 2. Early Return (조기 종료) 패턴
// "가드 클로저(Guard Clause)"라고도 부릅니다.
function printNumber(num) {
    // [가드 클로저] 조건이 맞지 않으면 함수 본문이 실행되기 전에 미리 종료
    if (num < 0) {
        console.warn('음수는 출력할 수 없습니다.');
        return;
    }

    // 위에서 걸러졌으므로, 이 아래는 '정상적인 상황'만 남습니다.
    console.log(`입력된 숫자: ${num}`);
}

printNumber(10);  // 10 출력
printNumber(-1);  // 경고 메시지 출력 후 종료