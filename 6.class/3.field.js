// 접근 제어자
// private(#) , public(기본) , protected - 자바스크립트에서는 없다.
class Fruit {
    #name;
    #emoji;
    #type = '과일'; // 인스턴스 생성시 초기화
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }

    display=()=>{
        console.log(`${this.#name} : ${this.#emoji}`);
    }
}

const apple = new Fruit('apple', '🍎');
//apple.#name = "오렌지" // #을 붙인 필드는 외부에서 접근 불가능
apple.name = "오렌지" // ??? 이건 왜 됨?
console.log(apple); // private 로 선언된 메소드 및 필드는 조회 불가능