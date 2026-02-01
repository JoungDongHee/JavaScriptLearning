
function Cat(name){
    this.name = name;
    // 2. arrow 함수를 사용
    // 화살표 함수는 렉시컬 환경에서의 this 를 기억한다.
    // 화살표 함수 밖에서 제일 근접한 스코프 의 this 를 가르킴 근데 이러면 인스턴스 마다 생성되는거 아닌가?\
    this.printName = ()=> {
        console.log(`고양이 이름을 출력한다옹 : ${this.name}`);
    };
    // 정적으로 바인딩 하기 위한 방법
    // 1.bind 라는 함수를 통해서 수동적으로 바인딩 조금 불편한듯?
    // this.printName = this.printName.bind(this);
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


dog.printName = cat.printName;
dog.printName();

function printOnMonitor(printName){
    console.log(`모니터를 준비하고 전달된 콜백을 실행`);
    printName();
}

printOnMonitor(cat.printName);