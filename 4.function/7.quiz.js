//주어진 숫자 만큼 0 부터 순회하는 함수를 작성
//순회하면서 주어진 특정한 일을 수행해야 함
// 5. 순회사는 숫자를 다 출력하고 싶음
// 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max,action);

// 익명 클래스 의 도입으로 인해 코드의 재사용성이 획기적으로 올라감.
// 사용자가 동작을 미리 정의한 이후 해당 함수 를 객체로 넘겨 줌으로서 내부 클래스에서 동작하기 때문이다.

// 1. 외부 로직 정의 (재사용 가능)
const logItem = (val) => console.log(`순회 중: ${val}`);
const doubleItem = (val) => console.log(`두 배 값: ${val * 2}`);

// 2. 고차 함수 (Higher-Order Function)
function iterate(max, action) {
    // action이 함수가 아닐 경우를 대비한 방어 코드
    if (typeof action !== 'function') {
        console.warn('전달된 action이 함수가 아닙니다.');
        return;
    }

    for (let i = 0; i < max; i++) {
        action(i); // 콜백 호출
    }
}

// 3. 다양한 방식으로 호출
iterate(3, logItem);
iterate(3, doubleItem);

// 필요할 때 즉석에서 익명 함수로 정의 (Java의 람다식과 유사)
iterate(2, (i) => {
    const square = i * i;
    console.log(`제곱 값: ${square}`);
});

// 4. 비동기 콜백 (Asynchronous Callback)
// 호출 스택이 비워진 뒤에 실행되는 특성이 있습니다.
setTimeout(() => {
    console.log("1초 뒤에 예약된 업무를 수행합니다.");
}, 1000);