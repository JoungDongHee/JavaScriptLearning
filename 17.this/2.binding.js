// 최초에 This 는 아무런 내용이 없는 빈 객체이다 {}
// new 을 통해 객체를 생성하고 함수를 호출 하는 순간 this.name 을 this 의 객체로 내용을 채우게 된다.
// this 바인딩 에서 자바나 c++ 같은 대부분의 객체지향 프로그래밍 언어에서는
// this 는 항상 자신의 인스턴스를 가르킨다.
// 정적으로 인스턴스가 만들어지는 시점에 this 가 결정된다.
// 하지만 자바스크립트 에서는 누가 호출 하냐에 따라서 this 가 달라짐
// 즉 this 는 호출 하는 사람caller  에 의해 동적으로 결정됨
function Cat(name){
    this.name = name;
    this.printName = function(){
        console.log(`고양이 이름을 출력한다옹 : ${this.name}`);
    };
}

function Dog(name){
    this.name = name;
    this.printName = function(){
        console.log(`강아지 이름을 출력한다옹 : ${this.name}`);
    };
}


const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

// cat 의 printName 의 함수를 dog.printName 으로 할당 한다.
// 여기서 호출자는 dog 가 호출을 하였기 때문에 dog 의 객체가 this 가 바인딩 된다.
/**
 * 💡 핵심 1: 암시적 바인딩 (Implicit Binding)
 * 함수를 호출한 주체(객체)가 this가 된다.
 */
dog.printName = cat.printName;
dog.printName();

// 자바는 위에서 cat 으로 객체를 생성하고 cat.printName() 를 호출하면 이미 객체가 생성되었기 때문에
// 프로그램이 종료될때까지 영원히 this.name 은 냐옹 이다.
// 하지만 자바스크립트는 호출 자가 누구냐에 따라 바인딩이 되는 동적바인딩 이기 때문에 다음과 같이
// 호출 하는 사람이 없는  printName(); 와 같은 경우에는 undefined 가 된다.
/**
 * 💡 핵심 3: 자바와의 결정적 차이
 * Java: 인스턴스 메서드는 객체에 꽁꽁 묶여 있음 (Strong Coupling)
 * JS: 함수는 객체로부터 독립적이며, 호출 시점에만 객체와 결합함 (Loose Coupling)
 */
function printOnMonitor(printName){
    console.log(`모니터를 준비하고 전달된 콜백을 실행`);
    printName();
}

printOnMonitor(cat.printName);