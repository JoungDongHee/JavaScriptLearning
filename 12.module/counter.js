// 모듈 내부 변수: 외부에서 직접 접근 불가 (Java의 private 필드와 유사)
let counter = 0;

/**
 * [Named Export]
 * export 키워드를 붙여야 외부에서 접근 가능함 (Java의 public)
 * 여러 개를 내보낼 수 있음
 */
export function increment() {
    counter++;
    console.log(`기기 내부 카운트: ${counter}`);
}

export function getCounter() {
    return counter;
}

// [참고] export default는 파일당 단 하나만 가능함
// 예: export default function reset() { counter = 0; }