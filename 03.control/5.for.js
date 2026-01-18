// 반복문 Loop
// for(변수선언문;조건식;증감식) { }
// 실행순서
// 1. 변수 선언문 을 실행하여 변수를 초기화
// 2. 조건식 값이 참이면 코드블럭을 실행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2 , 3번을 반복함

for(let i= 0; i<5; i++){
    console.log(i);
}

//중첩 for 문
let count = 0;
for(let i= 0; i<5; i++){
    for(let j= 0; j<5; j++){
        console.log(`반복 횟수 ${count}  : i : ${i} , j : ${j}`);
        count++;
    }
    count++;
}

//무한 루프
// for(;;){
//     console.log(1);
// }

for(let i= 0; i<20; i++){
    if(i === 10){
        //continue; continue 아래의 코드를 무시하고 다음 증감으로 넘어간다.
        // 즉 이 경우에는 10 을 건너뛰고 11 이 바로 출렬된다.
        console.log(`${i} 가 10이 되었다.!`);
        break; // 특정한 조건이 for 문을 종료하고 싶다면 break 키워드를 사용할수 있다.
    }
    console.log(i);
}
