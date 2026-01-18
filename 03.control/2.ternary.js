//삼항 조건 연산자
// 조건식 ? 참인경우 : 거짓인 경우

// 다음을 삼항 연산자로 바꾸면
fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else if (fruit === 'orange') {
    console.log('🍊'); // 실행됨
} else {
    console.log('정해지지 않은 과일입니다.');
}

fruit === 'apple' ? console.log('🍎') : console.log('정해지지 않은 과일입니다.');

// 삼항 조건 연산자를 통해 값을 할당하는 것 또한 가능하다.
let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);

// 다음과 같이 삼항 연산자를 사용하여 if 대용으로 쓰는 경우가 있으나. 이렇게 하는 것은 가독성이 떨어진다.
// let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');
// (company == 'Netscape') ?alert('정답입니다!') : alert('오답입니다!');

// 코드를 읽을때 우리는 수직으로 코드를 읽기 때문에 수평으로 길게 늘어진 코드 보다는 수직으로 나눠진 여러줄의 코드가
// 가독성이 좋습니다.
// let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');
// if (company == 'Netscape') {
//     alert('정답입니다!');
// } else {
//     alert('오답입니다!');
// }