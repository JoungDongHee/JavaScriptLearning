// const dog1 = {name:'뭉치',emoji:'🐶'}
// const dog2 = {name:'코코',emoji:'😺'}
//

// 생성자 함수
function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수
    // 만들어진 인스턴스 마다 가지게 된다.
    // this.print = ()=>{
    //     console.log(`${this.name} has ${this.emoji}`);
    // }
}

// prototype 키워드를 통해
Dog.prototype.print = function(name, emoji) {
    console.log(`${this.name} has ${this.emoji}`);
}

const dog1 = new Dog('뭉치','🐶');
const dog2 = new Dog('코코','😺');
console.log(dog1,dog2);

dog1.print();
dog2.print();

// 오버라이딩
// 인스턴스 레벨에서 동일한 이름으로 함수를 재정의 하면
// 프로토 타입 레벨의 함수의 프로토 타입은 무시됨
dog1.print = function (){
    console.log('안녕!')
}

dog1.print();

// 정적 레벨
Dog.hello = ()=>{
    console.log('Hello')
};
Dog.hello();
Dog.MAX_AGE = 20;