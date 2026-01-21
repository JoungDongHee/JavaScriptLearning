//퀴즈
// 문자열의 모든 캐릭터를 하나씩 출력 하라
const text = 'Hello World!';
for(let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


// 사용자의 ID 를 잘라내어 각각의 ID 를 배열로 보관
const ids = 'user1, user2,user3,user4';
let strings = ids.split(',');
console.log(strings);

// 1초에 한번씩 시계를 날짜 포함 출력

setInterval(()=>{
    let date = new Date;
    console.log(date.toISOString()); // 익명 함수 전달
},1000)