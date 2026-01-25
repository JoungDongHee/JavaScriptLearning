// 논리 연산자
// && 그리고
// || 또는
// 자바스크립트는 단축 평가가 이뤄진다
const obj1 = {name :'🐶'};
const obj2 = {name:'😺',owner :'Ellie'};

// obj1 은 값이 true
// obj2 도 값이 true
// && 연산자는 둘다 트루이기 때문에 obj1 이 true 가 나와도 obj2 도 평가를 진행한다.
if(obj1 && obj2){
    console.log('둘다 true');
}

// 반대로 || 는 하나만 true 여도 뒤에 평가가 필요없기 때문에 앞 부분만 평가가 이뤄진다.
if(obj1 || obj2){
    console.log('하나만 true');
}

// 조건문 밖에서
let result = obj1 && obj2;
console.log(result);
if(result){{

}}

let orOperation = obj1 || obj2;
console.log(orOperation);

// 활용예
// 조건이 truthy 일때 &&  무언가를 해야할 경우
// 조건이 falshy 일때 ||  무언가를 해야할 경우

function changeOwner(animal){
    // obj1.owner == false
    // obj2.owner ==  true
    if(!animal.owner){
        console.log("에러 실행됨")
        throw new Error('주인이 없습니다.')
    }
    animal.owner = '바뀐 주인';
}

function makeNewOwner(animal){
    if(animal.owner){
        throw new Error('주인이 있습니다.')
    }
    animal.owner = '새로운 주인';
}


obj1.owner && changeOwner(obj1); // false && false
obj2.owner && changeOwner(obj2); // true

console.log(obj1);
console.log(obj2);


obj1.owner || makeNewOwner(obj1); // false && false
obj2.owner || makeNewOwner(obj2); // true

console.log(obj1);
console.log(obj2);

// null 또는 undefined 인 경우를 확인할때
// item 이 없을 경우 undefined 으로 false 이기 때문에 뒤 에 있는 item.price 는 실행하지 않는다.
// item 이 있을 경우 값이 true 이므로 뒤에 있는 값을 평가 하여 item.price 가 실행된다.
let item = {price:1};
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default 는 prameter 전달하지 않거나 undefined 설정 일때만 실행됨
// or 연산자는 값이 falshy 한 경우 실행됨
function print(message){
    // message 가 없을 경우 false 로 뒤 '메시지가 없습니다.' 는 실행안함
    // message 가 있을 경우 true 이기 때문에 실행함
    const consoleMessage = message || '메시지가 없습니다.';
    console.log(consoleMessage);
}

print('ㅅㄷㅅㄴ');
print(null);
print(0);
