// 1. 날짜 생성 (정적 메서드 활용)
const now = new Date(); // 현재 로컬 시간
const epoch = Date.now(); // 현재 시간을 밀리초로 반환 (성능상 이점)

// 2. 특정 날짜 지정 (ISO 8601 포맷 권장)
const specificDate = new Date('2026-01-21T10:16:44');
console.log(Date.parse('2026-01-21T10:16:44')); // 밀리초 타임스탬프로 변환

// 3. 날짜 구성 요소 추출 (Getter)
console.log(now.getFullYear()); // 2026
console.log(now.getMonth());    // 0 (1월)
console.log(now.getDate());     // 21 (일자)
console.log(now.getDay());      // 3 (수요일 - 0:일, 1:월, 2:화, 3:수...)

// 4. 날짜 포맷팅 (출력 방식 비교)
console.log(now.toString());           // 로컬 시간대 기준 전체 문자열
console.log(now.toDateString());       // 날짜 부분만 (Wed Jan 21 2026)
console.log(now.toTimeString());       // 시간 부분만
console.log(now.toISOString());        // ISO 8601 표준 (UTC 기준, DB 저장용으로 주로 사용)
console.log(now.toLocaleString('ko-KR')); // 지역 설정에 맞는 날짜/시간
console.log(now.toLocaleDateString()); // 지역 설정에 맞는 날짜만