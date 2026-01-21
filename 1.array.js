// 배열 생성

// Array 클래스 를 사용하여 생성 배열 크기를 지정할수 있다.
// 크기를 2 로 지정해도 배열 크기는 계속 늘어나네?
let array = new Array(2);
console.log(array);
array[0] = 1;
array[1] = 2;
array[2] = 3;
console.log(array);


array = new Array(1,2,3); // 아이템을 넣어서 생성 가능
console.log(array);

// 새로운 배열 반환
// of 는 크기는 무한정 증가함
array = Array.of(1,2,3,4,5,6,7,8)

// 배열 리터럴을 사용하여 생성
const anotherArray = [1,2,3,4,5];
console.log(anotherArray);


// 기존 배열을 복사하여 새로운 배열 생성
const copyArray = Array.from(anotherArray);
console.log(copyArray);

let strings1 = Array.from("test");
console.log(strings1);

// 일반적으로 배열은 동일한 메모리 크기를 가지며 연속적으로 이어져 있어야함
// 예를들어 자바 에서는 List<Integer> 와 같은 배열은 Integer 타입만 들어갈수 있다.
// 하지만 자바스크립트에서 배열은 연속적으로 이어져 있지 않다.
// 즉 배열을 만들면 타입에 상관없이 전부 들어갈수 있다. (약타입의 단점 인듯?)
// 오브젝트 와 유사함
// 자바스크립트의 배열은 일반적으로 배열의 동작을 흉내낸 특수한 객체다.
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음
array = Array.from({
    0 : '안',
    1 : '녕',
    length : 2 // 크기 지정
})

console.log(array);


// 1. 일반 배열 (다양한 타입 허용, 동적 크기)
const mixedArray = [1, 'hello', { a: 1 }, true];

// 2. 타입 배열 (고정 크기, 단일 타입 - Java와 유사)
// Int32Array: 32비트 정수만 저장 가능한 10칸짜리 배열
const typedArray = new Int32Array(10);
typedArray[0] = 100;
// typedArray[1] = 'string'; // 숫자가 아니므로 무시되거나 0으로 저장됨

// 3. Array.from 활용 (유사 배열 -> 배열)
const arrayLike = {
    0: 'First',
    1: 'Second',
    length: 2
};
const realArray = Array.from(arrayLike);
console.log(realArray.includes('First')); // 진짜 배열이므로 메서드 사용 가능