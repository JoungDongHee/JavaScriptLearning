const array = [1,2,3];

// of 는 배열안에 있는 객체를 한개씩 item 에 담는다.
// 자바 의 개선된 for(char a : "hello world") 와 동일
// [Symbol.iterator](): ArrayIterator<T>
// 심볼 정의를 가진 객체나 특정 함수가 iterator 를 반환한다는것은
// 순회가 가능한 객체라는 것을 의미 함
// 순회가 가능하기 때문에 for..of 문법 이나 spread 문법 등을 사용할수 있다.
for(const item of array) {
    console.log(item);
}

/** Iterator */
// [Symbol.iterator](): ArrayIterator<T>;

/**
 * Returns an iterable of key, value pairs for every entry in the array
 */
//entries(): ArrayIterator<[number, T]>;
for(const item of array.entries()) {
    console.log(item);
}


// obj is not iterable
// iterable 규격을 따라가지 않기 때문에 of 사용 불가능
// 대신 in 을 사용하여 키 값을 추출하는 것이 가능함
const obj = {0:1,1:2};
// for(const item of obj) {
//     console.log(item);
// }


for(const item in obj) { // obj 안에 있는 key 를 출력함
    console.log(item);
}

console.log("=====================");

const iterator = array.values();
// next 는 다음과 같이 현재 순회하는 값 value 와 순회가 끝났는지 확인하는 done 을 가지고 있다.
//{ value: 1, done: false }
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
for(const item of iterator) { // 순회가 끝났기 때문에 for 문 실행 안됨
    console.log(item);
}

let numbers = array.values();
while (true) {
    const item = numbers.next();
    if(item.done) {
        break;
    }
    console.log(item);
}