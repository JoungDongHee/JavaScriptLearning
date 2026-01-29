const dog = {name:'와우',emoji:'🐶'};

console.log(Object.keys(dog))
console.log(Object.values(dog))
console.log(Object.entries(dog))

console.log('name' in dog); // key 를 확인함
console.log(dog.hasOwnProperty('name')); // key 를 확인함

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터 라고 하는 객체로 저장된다.
/**
 * 모든 데이터 출력
 * {
 *   name: { value: '와우', writable: true, enumerable: true, configurable: true },
 *   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
 * }
 */
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

/**
 * 특정 키만 조회
 */
let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(dog,'name');
console.log(ownPropertyDescriptor);

// 이렇게 설정하는 경우가 흔한가?
Object.defineProperty(dog,'name',{
    value : '멍멍',
    writable : false,
    enumerable : false,
    configurable : false
});
console.log("==== value change ====")
console.log(dog.name);
console.log(Object.keys(dog))
delete dog.name;
console.log(dog.name);