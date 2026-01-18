// 1. 기본 증감
let a = 0;
a++; // a = a + 1
console.log(a); // 1

a--; // a = a - 1
console.log(a); // 0

// 2. 전위(Prefix) vs 후위(Postfix) 연산
a = 0;

// 후위 연산자: 선 평가 후 증가
// 1. 현재 a 값(0)을 console.log에 전달
// 2. a를 1로 증가시킴
console.log(a++); // 0 출력, 현재 a는 1

// 전위 연산자: 선 증가 후 평가
// 1. a를 2로 먼저 증가시킴 (1 + 1)
// 2. 증가된 값(2)을 console.log에 전달
console.log(++a); // 2 출력, 현재 a는 2

// 3. 변수 할당 시의 동작
let b = a++; // b에는 현재 a값인 2가 할당되고, a는 3이 됨
console.log(`B: ${b}, A: ${a}`); // B: 2, A: 3

// 4. 단독 사용 시 (결과 동일)
let c = 0;
let d = 0;
c++;
++d;
console.log(c, d); // 1, 1 (부수 효과만 필요할 때는 차이가 없음)