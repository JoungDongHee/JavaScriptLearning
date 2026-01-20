//카운터 만들기
//0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할수 있는 카운터 만들기
//Counter 클래스 만들기

class Counter{
    #_count
    constructor(count){
        if(isNaN(count) || count < 0){
            this.#_count = 0;
        }
        this.#_count = count;
    }
    increment(){
        this.#_count++;
    }
    get count() {
        return this.#_count;
    }
}

let counter = new Counter(0);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);