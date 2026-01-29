// 내부 정보를 은식하고 공개 함수를 통한 데이터 조작을 위해
// 캡슐화 와 정보 은닉
// 클래스 private 필드 랑 똑같은 효과 클로저 를 지금도 자주 쓰는지?
 function makeCounter(){
    let cont = 0;
    function increment(){
        cont++;
        console.log(cont);
    }
    return increment;
 }
 let increment = makeCounter();
increment();
increment();
increment();

class Counter{
    #counter = 0;
    increment(){
        this.#counter++;
        console.log(this.#counter);
    }
}

let counter = new Counter();
counter.increment();