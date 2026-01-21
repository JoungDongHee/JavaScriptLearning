// 래퍼 객체
// 원시값을 필요에 따라서 원시값 을 관련된 빌트인 객체로 변환한다.
const number = 123; // 최초 할당시에는 number 원시 타입
console.log(number.toString()); // . 을 붙여 함수를 호출할려고 하는 순간 number 원시 타입을 감싸고 있는 Number 객체로 변환됨
console.log(number);

const text = 'text'; // 1. 단순한 원시값 'text'가 메모리에 할당됨

// 2. 엔진이 '.'을 발견하는 순간!
// 내부적으로 임시 객체가 생성됩니다: new String('text').length
console.log(text.length);

// 3. 출력이 끝나면 임시 String 객체는 가비지 컬렉터로 인해 사라집니다.
// text 변수는 여전히 순수한 원시값 'text'입니다.