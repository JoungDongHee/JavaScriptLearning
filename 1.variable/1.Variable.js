let a = 0;
console.log(a);

a = 1; // 값의 재할당
console.log(a);

let b;
console.log(b); // 값을 할당하지 않았기 때문에 undefined
b = a; // a 는 객체가 아닌 원시 타입 데이터 이기 때문에 b 는 참조 데이터가 아닌 순수한 2 가 저장된다.
console.log(b);