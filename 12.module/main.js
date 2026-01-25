/**
 * [Import 전략]
 * 1. { increment, getCounter } : 필요한 것만 쏙쏙 (Named Import)
 * 2. * as count : 모든 export를 count라는 객체 안에 그룹화 (Namespace Import)
 */
import * as count from "./counter.js";

// console.log(counter); // ❌ 에러: counter.js의 지역 변수에 직접 접근 불가 (은닉화)

count.increment(); // 1
count.increment(); // 2

// 현재 카운트 값을 복사해옴
let currentVal = count.getCounter();
console.log('가져온 값: ' + currentVal);

// currentVal은 복사본일 뿐, 이 값을 바꾼다고 counter.js의 실제 값이 변하지 않음
currentVal = -10;
console.log('내 지역 변수만 변경: ' + currentVal);
console.log('실제 모듈 값 유지: ' + count.getCounter());