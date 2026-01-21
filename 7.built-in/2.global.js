// 1. 전역 객체 (Global Object)
// 브라우저라면 window, Node.js라면 global을 가리킵니다.
// globalThis는 어떤 환경에서든 전역 객체에 접근할 수 있는 표준 식별자입니다.
console.log(globalThis);

// 2. 유틸리티 함수
console.log(isFinite(1));       // true
console.log(isFinite(Infinity)); // false

// parseInt vs parseFloat
console.log(parseInt('12.34'));   // 12 (정수로 변환)
console.log(parseFloat('12.34')); // 12.34 (실수로 변환)

// 3. URL 인코딩 (URI Encoding)
// URI는 아스키(ASCII) 문자 세트만 허용하므로, 한글/특수문자를 규격에 맞게 변환해야 합니다.
const URL = 'https://드림코딩.com/js?name=엘리';

// encodeURI: 주소 전체를 인코딩 (주소창의 특수문자 : / ? = 등은 유지함)
const encoded = encodeURI(URL);
console.log(`전체 인코딩: ${encoded}`);

// encodeURIComponent: 주소의 '부분(컴포넌트)'을 인코딩 (: / ? = 등까지 모두 변환)
// 쿼리 파라미터 내부에 특수문자가 포함될 때 필수입니다.
const query = 'name=엘리&city=안산';
const encodedPart = encodeURIComponent(query);
console.log(`부분 인코딩: ${encodedPart}`);