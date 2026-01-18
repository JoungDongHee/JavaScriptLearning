//while(조건) {}
//조건이 false 가 될때까지 {} 코드를 반복
// for 문 처럼 별도의 증감식을 사용하지 않기때문에 코드 블럭 내부에 조건이 false 가 되도록 작성

let num = 5;
while(num >=0){
    console.log(num)
    num--;
}

let isActive = false;
let i = 0;
while(isActive){
    console.log(`아직 살아있다. 횟수 ${i}`);
    if(i === 1000){
        //isActive = false;
        break;
    }
    i++;
}

// do while 은 일단 한번은 무조건 실행하고 조건을 검사한다. 
do{
    console.log("일단 한번은 실행")
}while(isActive);
