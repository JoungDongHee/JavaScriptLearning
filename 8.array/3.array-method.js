//배열의 함수들
// 배열 자체를 변경하는지  , 새로운 배열을 반환하는지
const fruits = [`🍎`, `🍌`,`🍇`,`🍊`];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // 배열 여부 체크
console.log(Array.isArray({})); // 값이 비어있을 경우 false

console.log(fruits.indexOf(`🍌`)); // 배열이 있을 경우 index 값 반환 없을 경우 -1
console.log(fruits.indexOf(`😂`)); // -1

// 배열안에 특정 아이템이 있는지 체크
console.log(fruits.includes(`🍌`)); // true
console.log(fruits.includes(`😂`)); // false

// 추가 - 제일 뒤
console.log(fruits.push('🍑')); // 추가될 경우 인덱스 길이 반환
console.log(fruits)

// 추가 - 제일 앞
console.log(fruits.unshift('🍐'));
console.log(fruits)

// 제거 - 제일 뒤
let deleteItem = fruits.pop(); // 제거된 아이템 반환
console.log(deleteItem);
console.log(fruits);

//제거 - 제일 앞
let firstItem = fruits.shift();
console.log(firstItem);
console.log(fruits);

//중간 - 추가 또는 삭제
fruits.splice(1,2); // 인덱스 1번 부터 1개를 삭제 삭제된 아이템 반환
console.log(fruits);

fruits.splice(1,1,'🍐',`😂`); // 배열 자체를 수정 업데이트
console.log(fruits);

// 1. slice: 원본은 그대로, 필요한 부분만 "복사"해서 새 배열 생성
let newArray = fruits.slice(0,2); // 0 ~ 2 까지 2 를 제외 한다. 아무것도 지정하지 않을 경우 배열 전체가 반환된다.
console.log(newArray);

// 여러개의 배열을 붙여준다.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
let numbers = arr1.concat(arr2); // 새로운 배열 반환
console.log(numbers);

// 순서를 거꾸로
// 2. reverse: 주의! 원본 배열의 순서를 실제로 바꿈
let numbers1 = numbers.reverse();
console.log(numbers1);

let arr = [
    [1,2,3],
    [4,[
        5,6
    ]]
]

console.log(arr);

// 3. flat: 중첩된 배열을 평탄화 (새 배열 반환)
let flat = arr.flat(2); // 중첩된 배열을 펼쳐준다. 이때 1단계 배열 까지만 푼다.
console.log(flat);

// 4. fill: 특정 값으로 배열 채우기 (원본 변경)
flat.fill(0); // fill 을 자기 자신을 수정
console.log(flat);

flat.fill('s',1,3);
console.log(flat);

// 5. join: 배열의 모든 요소를 문자열로 합침 (새 문자열 반환)
let text = flat.join();
console.log(text);
flat.join('|');