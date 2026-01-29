const text = 'Hello';
function func(){
    console.log(text);
} // 내부에서 외부로 접근이 가능하다.
func();

function outer(){
    const x = 0;
    function inner(){
        console.log(x); // inner 함수에서 outer 함수의 x 에 접근 가능하다.
    }
    //inner();
    return inner;
}

//outer();

let inner = outer();
inner();