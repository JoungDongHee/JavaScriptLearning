/**
 * [호이스팅 복습 가이드]
 * 1. 함수 선언문: 완전 호이스팅 (이름 + 본체)
 * 2. 변수 선언문: 선언만 호이스팅 (초기화는 해당 라인에서)
 */

// [사례 1] 함수 선언문
printHello(); // ✅ 성공: 엔진이 메모리에 함수 본체까지 등록 완료

function printHello() {
    console.log("Hello");
}

// [사례 2] 화살표 함수 (함수 표현식)
// const/let의 호이스팅 규칙을 따름
errorFunc(); // ❌ TypeError: errorFunc is not a function (또는 ReferenceError)
const errorFunc = () => console.log("Error");

// [사례 3] TDZ의 치명적 함정
const name = "Global Name";
{
    /**
     * 블록 스코프 내에서 name이 호이스팅되어 상위 스코프의 name을 가리지만,
     * 아직 초기화(Assignment)되지 않았으므로 '사각지대'에 빠짐.
     */
    console.log(name); // ❌ ReferenceError
    const name = "Local Name";
}