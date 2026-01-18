// 1. 문자열 선언 방식
const doubleQuoteString = "안녕하세요";
const singleQuoteString = '안녕하세요';
const backtickString = `안녕하세요`; // 템플릿 리터럴

// 2. 특수문자 및 따옴표 포함하기
// 외부에 홀따옴표를 쓰면 내부에서 쌍따옴표를 자유롭게 쓸 수 있습니다.
let string = "'안녕'";
console.log(string); // '안녕' 출력

// 3. 이스케이프 시퀀스 (Escape Sequence)
// \u00AC 처럼 16진수 코드를 함께 적어야 유니코드가 정상 출력됩니다.
string = '안녕 \n 하세요 \t\t 내 이름은 \\ \u00AC';
console.log(string);

// 4. 문자열 연결 (전통적인 방식)
const id = '엘리';
const greetings = '안녕 ! ' + id + '\n즐거운 하루 보내세요';
console.log(greetings);

// 5. 템플릿 리터럴 (현대적인 방식)
// 줄바꿈이 그대로 반영되며, ${} 안에 표현식(연산 등)을 넣을 수 있습니다.
const template = `안녕! ${id} 

즐거운 하루 보내세요. 1 + 1은 ${1 + 1}입니다.`;
console.log(template);