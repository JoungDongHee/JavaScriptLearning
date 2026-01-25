/**
 * [자바스크립트 비동기 실행의 4요소]
 * 1. Call Stack: 현재 실행 중인 함수들이 쌓이는 곳 (싱글 쓰레드 일꾼)
 * 2. Web APIs (Background): 타이머, 네트워크 요청, 이벤트 리스너 등이 실제로 기다리는 장소
 * 3. Task Queue (Callback Queue): 작업이 완료된 후 실행될 '콜백 함수'들이 줄 서는 대기소
 * 4. Event Loop: 스택이 비었는지 감시하다가, 대기소의 함수를 스택으로 넘겨주는 안내원
 */

function execute() {
    // 1. '1'을 출력하는 작업이 스택에 들어갔다 즉시 실행 후 나감
    console.log('1');

    /**
     * 2. setTimeout이 실행됨
     * - 이 함수는 스택에 들어오자마자 '타이머 작업'을 Web API(브라우저)에게 던지고 바로 나감.
     * - ⚠️ 중요: 1000ms 동안은 'Task Queue'가 아니라 'Web API' 영역에서 타이머가 돌아감.
     * - 1000ms가 끝나는 순간, 내부 콜백 () => { console.log('2') } 가 'Task Queue'로 들어감.
     */
    setTimeout(() => {
        console.log('2');
    }, 1000);

    // 3. setTimeout이 던져진 직후 바로 '3'을 출력하는 작업이 스택에서 실행됨
    console.log('3');
}

/**
 * [최종 실행 순서 추적]
 * 1. execute() 호출 -> 스택 쌓임
 * 2. log('1') 실행
 * 3. setTimeout 실행 (Web API에게 타이머 1초 맡김)
 * 4. log('3') 실행
 * 5. execute() 종료 -> 스택이 완전히 비워짐
 * 6. (1초 뒤) Web API가 콜백 함수를 Task Queue에 넣음
 * 7. Event Loop가 스택이 비어있는 것을 확인하고 콜백을 스택으로 올림
 * 8. log('2') 실행
 */

execute();