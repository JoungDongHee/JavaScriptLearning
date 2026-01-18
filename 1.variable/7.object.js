// Object 객체
// 객체 타입은 원시 타입과 다르게 값이 저장되는게 아니다.
// object 내부의 데이터는 heap 영역에 저장이 되며 data 영역에는 let orange = 0x000 과 같은 heap 영역의 주소를 가르키게 된다.
let name = 'apple';
let color = 'red';
let display = '🍎'
let orangeName = 'orange';

let apple = {
    name: 'apple',
    color : 'red',
    display : '🍎'
};

let orange = {
    name: 'orange',
    color : 'yellow',
    display : '🍊'
}

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

console.log("===========================");

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);

