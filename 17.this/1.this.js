/**
 * 1. 글로벌 컨텍스트 (Global Context)
 * - Java의 static 영역과 유사한 전역 공간에서의 this입니다.
 * - 브라우저: window 객체를 가리킵니다.
 * - Node.js: 현재 파일(모듈)의 exports 객체({ })를 가리킵니다.
 */
'use strict'; // 엄격 모드 활성화 (함수 내부 this 동작이 변함)

const x = 0;
module.exports.x = x;

console.log('--- Global This ---');
console.log(this);       // Node.js 모듈 환경에서는 module.exports와 동일
console.log(globalThis); // 환경(Browser/Node)에 상관없이 항상 최상위 전역 객체 지칭

/**
 * 2. 일반 함수 내부 (Functional Context)
 * - "누가 나를 호출했는가?"가 핵심입니다.
 * - 일반 호출: 호출 주체가 없으므로 전역 객체(global/window)를 바라봅니다.
 * - Strict Mode: 전역 오염 방지를 위해 undefined로 바인딩됩니다. (권장)
 */
function fun() {
    console.log('--- Function This ---');
    console.log(this);
}

fun(); // 일반 호출 -> 엄격 모드이므로 undefined 출력

/**
 * 3. 생성자 함수 및 클래스 (Constructor/Class Context)
 * - Java의 this와 가장 유사하게 동작하는 유일한 경우입니다.
 * - 'new' 키워드를 사용하면 엔진이 빈 객체를 생성하고, this를 해당 인스턴스에 고정합니다.
 */
function Cat(name) {
    // 1. new와 함께 호출되면 빈 객체 { }가 생성되고 this에 할당됨
    this.name = name;

    // 2. 인스턴스 메서드 내부의 this는 생성된 인스턴스 자체를 가리킴
    this.printName = function() {
        console.log(`My name is ${this.name}`);
    };
}

const cat1 = new Cat('나비');
const cat2 = new Cat('치즈');

console.log('--- Instance This ---');
cat1.printName(); // '나비' 출력 (this === cat1)
cat2.printName(); // '치즈' 출력 (this === cat2)

/**
 * [⚠️ 주의: Binding Lost 사례]
 * 메서드를 변수에 할당하여 호출하면 호출 주체가 사라져 this를 잃어버립니다.
 */
const loseBinding = cat1.printName;
// loseBinding(); // ❌ TypeError: Cannot read property 'name' of undefined (Strict mode)