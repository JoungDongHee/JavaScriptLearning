// 엄격 모드 strict mode
// 리엑트 와 같은 프레임 워크 사용시 기본적으로 엄격 모드 임
'use strict';

// 사용 불가능
// var x = 1;
// delete x;

// 키워드 생략 불가능
function add(x){
    var a = 2;
    b = a+x;
    console.log(this)//함수 내부에서 this 불가능
}
add(1);

const array = [1,2,3];
for(number of array){ // for 내부에서 키워드 생략 불가능
    console.log(array);
}