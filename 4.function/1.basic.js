function add(a , b) {
    console.log('function');
    return a + b;
}

const result = add(5,10);
console.log(result);


// 예제 2
// 함수를 사용하여 재사용 성 과 유지보수 성을 높여준다.
// 특히 중복된 보일러플레이트 코드를 줄여준다.
function fullName(firstName, lastName) {
    return `${lastName} ${firstName} 👍`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '바';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));

