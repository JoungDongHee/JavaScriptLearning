//정직원 과 파트타임 직원을 나타낼수 있는 클래스를 만들자
// 직원들의 정보 이름 , 부서이름 , 한달근무 시간
// 매달 지원들의 정보를 이용해서 한달 월급을 계산할수 있다.
// 정직원은 시간당 1000 원
// 파트타임 직원은 시간당 8000 원

class Employee {
    #name;
    #department;
    #hoursPerMonth;
    #hourlyRate;

    constructor(name, department, hoursPerMonth, hourlyRate) {
        this.#name = name;
        this.#department = department;
        this.#hoursPerMonth = hoursPerMonth;
        this.#hourlyRate = hourlyRate;
    }

    // 자식 클래스에서 계산에 사용할 수 있도록 게터 제공
    get hoursPerMonth() {
        return this.#hoursPerMonth;
    }

    get hourlyRate() {
        return this.#hourlyRate;
    }

    // 공통된 급여 계산 로직은 부모에서 정의할 수 있습니다.
    get salary() {
        return this.#hoursPerMonth * this.#hourlyRate;
    }

    display() {
        console.log(`${this.#name}(${this.#department})님의 이번 달 급여는 ${this.salary}원입니다.`);
    }
}

class FullTimeEmployee extends Employee {
    static #HOURLY_RATE = 10000; // 정직원 시급

    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.#HOURLY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static #HOURLY_RATE = 8000; // 파트타임 시급

    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.#HOURLY_RATE);
    }
}

// 사용 예시
const kim = new FullTimeEmployee('김철수', '개발팀', 30);
const lee = new PartTimeEmployee('이영희', '디자인팀', 20);

kim.display(); // 김철수(개발팀)님의 이번 달 급여는 1600000원입니다.
lee.display(); // 이영희(디자인팀)님의 이번 달 급여는 640000원입니다.


