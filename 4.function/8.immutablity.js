// 1. 원시 값의 불변성 확인
function display(num) {
    num = 5; // 지역 변수만 변경됨
    console.log(`함수 내부 num: ${num}`);
}

const value = 4;
display(value);
console.log(`함수 외부 value: ${value}`); // 여전히 4

console.log("----------------------------");

// 2. 좋지 않은 예: 원본을 직접 수정 (Side Effect 발생)
function displayObject(obj) {
    obj.name = "Changed John";
    console.log("함수 내부(수정됨):", obj);
}

// 3. 좋은 예: 불변성 유지 (Immutability)
// 새로운 객체를 복사 생성하여 작업을 수행하고 반환합니다.
function bestDisplayObject(obj) {
    // 새로운 객체를 생성하고 원본의 내용을 복사함 (Shallow Copy)
    const newObj = { ...obj, name: "New John" };
    console.log("함수 내부(새 객체):", newObj);
    return newObj; // 필요한 경우 새로운 객체를 반환
}

const person = { name: "John" };

// 나쁜 예시 실행
displayObject(person);
console.log("함수 외부(원본 손상됨):", person);

console.log("----------------------------");

// 좋은 예시 실행
const originalPerson = { name: "Alice" };
const updatedPerson = bestDisplayObject(originalPerson);

console.log("함수 외부(원본 유지):", originalPerson); // { name: "Alice" }
console.log("함수 외부(결과물):", updatedPerson);     // { name: "New John" }