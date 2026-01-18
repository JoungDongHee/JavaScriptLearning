// 조건문
// switch
// if else if else if ...else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 1; // 0: 월요일 , 1: 화요일 ...6 :일요일

// if 는 특정 범위를 지정할때 사용하는게 좋다.
let dayname;
if (day === 1) {
    dayname = "화요일";
}else if( day === 3){
    dayname = "수요일";
}
console.log(`if : ${dayname}`);

//switch 는 정해진 값에 대해 사용하는게 좋다.
// switch 는 해당 케이스가 끝난뒤 다른 코드가 실행되지 않도록 break 를 걸어줘야 한다.
// break 가 빠진경우 다음 케이스 문도 실행되어 의도치 않은 코드가 실행될수 있다.
// default 는 case 에 해당하는 것이 아무것도 없을 경우 실행된다.
// switch 은 엄격한 타입비교(===) 을 사용한다. 즉 day 에 "1" 이 들어갈 경우 default 로 빠지게 된다.
switch(day){
    case 1:
        dayname = "화요일";
        break;
    case 2:
        dayname = "수요일";
        break;
    case 5: // 여러개의 case 를 사용할때.
    case 9:
        dayname = "화요일";
        break;
    default:
        dayname = "";
        break;
}
console.log(`switch : ${dayname}`);