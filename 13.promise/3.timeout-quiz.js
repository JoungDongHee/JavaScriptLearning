/**
 * [수정 포인트]
 * 1. 단위 변환: 초(s)를 밀리초(ms)로 바꿀 때는 $$ms = seconds \times 1000$$ 공식을 사용합니다.
 * 2. 오타 수정: 'callbak' -> 'callback'
 * 3. 에러 메시지 구체화: 어떤 값이 잘못되었는지 명시하는 것이 유지보수에 좋습니다.
 */

function runInDelay(callback, seconds) {
    // 1. 유효성 검사 (Guard Clause)
    if (!callback) {
        throw new Error('callback 함수가 필요합니다.');
    }
    if (seconds <= 0) {
        throw new Error('seconds는 0보다 커야 합니다.');
    }

    // 2. 단위 변환 (초 -> 밀리초)
    const ms = seconds * 1000;

    let date = new Date().toLocaleTimeString()

    console.log(`${date}: ${seconds}초($$${ms}ms$$) 뒤에 콜백이 호출됩니다.`);

    // 3. 비동기 예약 (Web API에게 위임)
    setTimeout(callback, ms);
}

// 테스트: 2초 뒤에 실행 (2000ms)
try {
    runInDelay(() => {
        let date = new Date().toLocaleTimeString()
        console.log(`${date} : ⏰ 시간이 다 되었습니다! 콜백을 호출합니다.`);
    }, 10);
} catch (error) {
    console.error(error.message);
}