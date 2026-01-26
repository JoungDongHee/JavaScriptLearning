// 1. 내가 만든 서비스 코드
const user = {
    name: '엘리',
    // 사용자의 접속 정보를 저장하기 위해 'metadata'라는 키를 사용함
    metadata: {
        lastLogin: '2026-01-25',
        ip: '127.0.0.1'
    }
};

// 2. 외부 라이브러리 도입 (예: 통계 분석 라이브러리)
// 이 라이브러리도 내부적으로 'metadata'라는 이름을 사용하여 정보를 기록함
function analyticsLibrary(obj) {
    obj.metadata = "Version 1.2.3 / Analytics Data"; // ⚠️ 기존 데이터를 덮어버림!
    obj.channels = "12414";
}

// 라이브러리 실행
analyticsLibrary(user);

// 3. 결과 확인
console.log(user);
// 출력: "Version 1.2.3 / Analytics Data"
// 😱 원래 내가 저장했던 lastLogin과 ip 정보가 영구적으로 유실되었습니다!


console.log("=== use symbol ===");

// 1. 내 서비스 전용 심볼 생성
const myMetadata = Symbol('metadata');

const user1 = {
    name: '엘리',
    // 나만 알고 있는 고유한 열쇠(Symbol)로 데이터를 저장함
    [myMetadata]: {
        lastLogin: '2026-01-25',
        ip: '127.0.0.1'
    }
};

// 2. 외부 라이브러리 실행
analyticsLibrary(user1);

// 3. 결과 확인
console.log(user1.metadata);   // 라이브러리의 데이터: "Version 1.2.3 / Analytics Data"
console.log(user1[myMetadata]); // 나의 데이터: { lastLogin: '2026-01-25', ip: '127.0.0.1' }

