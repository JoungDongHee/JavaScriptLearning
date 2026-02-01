// 자바스크립트에서 함수는 자유롭게 가능하다.
// 함수처럼 사용할수 있고 생성자 함수로 사용할수 있다.
// 하지만 이를 위해 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 이 생성됨

const dog = {
    name : 'Dog',
    // play: function (){
    //     console.log('논다 멍');
    // }
    play:()=>{
        console.log('논다 멍');
    }
}

dog.play();
//const obj = new dog.play(); // 생성자 함수 처럼 할당을 할수 있다. 이것은 안좋다.
//console.log(obj);

// 이를 위해 메서드가 나온다.
const cat = {
    name : 'cat',
    play(){ // 객체의 메서드 오브젝트에 속한 함수
        console.log('냐옹')
    }
};
cat.play();
//const obj1 = new cat.play(); // 불가능 TypeError: cat.play is not a constructor
//console.log(obj1);

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔하다.
 * 2. 생성자 함수로 사용이 불가능 무거운 프로토 타입 의 생성 X
 * 3. 함수자체 arguments 없음
 * 4. this 에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this 에 의해 정적으로 바인딩 됨
 */

const add = (a,b)=>{
    console.log(arguments) // arrow 함수 외부의 arguments 를 참조함
}
add(1,2)

const printArrow = ()=>{
    console.log(this);
}
printArrow();
cat.printArrow = printArrow;
cat.printArrow();