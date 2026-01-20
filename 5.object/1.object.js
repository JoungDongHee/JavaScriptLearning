// 1. 객체 생성 및 속성 정의
const apple = {
    name: 'apple',           // 식별자 규칙을 따르는 일반적인 키
    'hello-bye': '😊',       // 특수문자가 포함된 문자열 키
    0: 1,                    // 숫자 키 (내부적으로 "0"으로 변환됨)
    ['dynamic-key']: '🔥',   // 계산된 속성명 (Computed Property Name)
};

// 2. 데이터 접근
console.log(apple.name);           // 마침표: 가장 가독성이 좋고 빠름
console.log(apple['hello-bye']);   // 대괄호: 특수문자나 공백이 있을 때 필수
console.log(apple[0]);             // 숫자 키는 대괄호로 접근 (apple.0은 불가능)

// 3. 속성 추가 및 수정
apple.emoji = '🍎';                // 동적 추가
apple['color'] = 'red';           // 대괄호로 동적 추가
apple.name = 'Delicious Apple';    // 수정

// 4. 속성 제거
delete apple.color;

// 5. 존재하지 않는 속성 접근
console.log(apple.price);          // 에러가 아닌 undefined 반환