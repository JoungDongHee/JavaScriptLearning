// 한줄 주석
/*
* 여러줄 주석
* 다음 줄로 자동으로 넘어감
* */

/*
* 변수 규칙
* 라틴 문자(0-9 , a-z , A-Z) , __
* 대소문자 구분함
* 추천 : camelCase 로 작성해야함
* 두개의 합성어 일 경우 첫번째는 소문자 두번째는 대문자로 작성하며 junAge 와 같이 작성한다
* 한국어도 가능하지만 한국어는 사용하지 말것 X
* 예약어 사용불가능
* 숫자로 시작 하면 않됨
* 특수문자는 사용불가능( _ ,$ 는 예외)
* Emoji 도 사용불가능
* */

let redApple; //camelCase

// antipattern

let number = 20;

//의미 없는 방식의 변수명
let audio1;
let audio2;
let newNumber;
let oldNumber;

// best
// 변수명 을 작명할때는 항상 의미 있는 구체적인 이름으로 작명한다.
let myAge = 20;
let backgroudAudio;
let windAudio;

// 행위를 뒤에 붙인다.
let audioBackground;
let audioWind;



