// 1. 함수 선언문 (Function Declaration)
function add(a, b) {
    console.log('함수 실행 중...');
    return a + b;
}

// 2. 함수 참조 할당
// add 변수가 가진 메모리 주소를 sum에 복사함 (Copy by Reference)
const sum = add;

// 3. 동일성 확인
console.log(sum === add); // true: 두 변수는 동일한 메모리 주소를 가리킴

// 4. 호출 방식의 다양성
console.log(sum(1, 2));   // sum을 통해 호출
console.log(add(2, 3));   // 원본 식별자 add를 통해 호출
