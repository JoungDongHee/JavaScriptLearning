/**
 * [Promise 기반의 지연 실행 함수]
 * resolve: 성공했을 때 호출 (결과값을 담을 수 있음)
 * reject: 실패했을 때 호출 (에러 객체를 담는 것이 관례)
 */
function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        // 1. 유효성 검사
        if (!seconds || seconds <= 0) {
            reject(new Error("시간은 0초보다 커야 합니다."));
            return; // reject 후 함수 종료를 위해 return 필수
        }

        // 2. 비동기 작업 수행
        setTimeout(() => {
            // 성공을 알림 (필요하다면 데이터를 인자로 전달 가능)
            resolve('⏰ 타이머가 성공적으로 완료되었습니다!');
        }, seconds * 1000);
    });
}

// 실행부
runInDelay(2) // 2초 뒤 실행
    .then((message) => {
        // resolve()의 인자가 message로 전달됨
        console.log(message);
    })
    .catch((error) => {
        // reject()의 에러 객체가 여기로 전달됨
        console.error(`에러 발생: ${error.message}`);
    })
    .finally(() => {
        // 성공/실패 여부와 상관없이 무조건 실행 (자바의 finally와 동일)
        console.log("--- 지연 작업 프로세스 종료 ---");
    });