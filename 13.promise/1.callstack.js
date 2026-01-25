/**
 * [JS 엔진의 핵심 구조]
 * 1. Memory Heap: 참조 타입(Object, Array)이 저장되는 비정형 창고 (Java의 Heap과 유사)
 * 2. Call Stack: 원시 타입과 '함수 호출 기록'이 쌓이는 LIFO(Last In First Out) 스택
 * * [동작 특징]
 * - 싱글 컨텍스트 스택: 한 번에 단 하나의 함수만 실행 가능 (Single Threaded)
 * - 동기적 진행(Synchronous): 앞선 작업이 끝나야 다음으로 이동
 * - Java와의 차이: Java는 여러 쓰레드가 각자의 스택을 가지지만, JS는 메인 쓰레드 하나가 전체를 관리함
 */

function a() {
    /**
     * [Blocking(차단) 주의구간]
     * JS는 싱글 쓰레드이므로, 아래와 같은 무거운 연산이 실행되면
     * 콜 스택이 비워지지 않아 브라우저의 화면 렌더링을 포함한 모든 동작이 멈춤(Freeze).
     */
    // for(let i = 0; i < 1000000000; i++) { ... }

    return 1;
}

function b() {
    // a()가 호출되면 스택의 '최상단'으로 쌓임 (Stack Push)
    return a() + 1;
}

function c() {
    // b()가 호출되면 c 위에 b가 쌓임
    return b() + 1;
}

/**
 * [실행 순서 디버깅]
 * 1. 전역 실행 컨텍스트(Global Context) 생성
 * 2. console.log('시작했다.') -> 스택 진입 후 즉시 제거
 * 3. c() 호출 -> [c] 쌓임
 * 4. b() 호출 -> [c, b] 쌓임
 * 5. a() 호출 -> [c, b, a] 쌓임 (최고 깊이)
 * 6. a 종료 -> [c, b] (Pop)
 * 7. b 종료 -> [c] (Pop)
 * 8. c 종료 -> [] (Stack Empty)
 */

console.log('시작했다.');
let c1 = c();
console.log(`최종 결과값: ${c1}`); // 3