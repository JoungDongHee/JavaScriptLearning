// 퀴즈
let num = 2;

// num 의 숫자가 짝수이면 👍  홀수 라면 👎  을 출력하도록

// if 문을 사용하여

if(num%2 === 0){
    console.log('👍');
}else if(num%2 === 1){
    console.log('👎');
}

//삼항연산자 사용

let emoji = num%2 ===0 ? '👍': '👎';
console.log(emoji);