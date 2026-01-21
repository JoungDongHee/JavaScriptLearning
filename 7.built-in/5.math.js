// 수학 관련 객체들
// Math

Math.E // 오일러 상수 자연로그 밑
Math.PI // 원주율 값 PI

//
console.log(Math.abs(-123)); // 절대값
console.log(Math.ceil(1.4)) // 소수점 이하를 올림 2
console.log(Math.floor(1.4)) // 소수점 이하를 내림 1
console.log(Math.round(1.4)); //소수점 이하를 반올림 1

//정수만 반환
console.log(Math.trunc(4.5423));

//지정된 숫자중 가장 큰 값
console.log(Math.max(1,2,4,5,6))
//지정된 숫자중 가장 작은값
console.log(Math.min(1,2,4,5,6))

//거듭 제곱
console.log(4**2); // 16
console.log(Math.pow(4,2));

// 제곱근
console.log(Math.sqrt(9)); // 3

//랜덤한 값 을 반환함
console.log(Math.random());

// 1 ~ 10 까지
// Math.random 는 0 부터 1 까지의 소숫값 리턴
console.log(Math.floor(Math.random()*10+1));



