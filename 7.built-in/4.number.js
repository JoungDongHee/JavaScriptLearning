// Number 객체
const num1 = 123;
const num2 = new Number(123); // 메모리 낭비
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // 10^308 정수로 표현할수 있는 최고값
console.log(Number.MIN_VALUE); // 최소값
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY); // -무한대
console.log(Number.POSITIVE_INFINITY); // 양수 무한대

if(num1 <= Number.MAX_SAFE_INTEGER){

}

if(Number.isNaN(num1)){ // 정수인지 아닌지 확인 하는 로직

}

//지수 표기법 매우 크거나 작은 숫자를 표기할때 사용
const num3 = 102;
console.log(num3.toExponential()); // 102 를 지수로 변환

// 반올림 하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 나라별 표기

//원하는 자리수 까지 유효하도록 반 올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2));

console.log(Number.EPSILON); // 0 과 1 사이에 나타낼수 있는 가장 작은 숫자
let epsilon = Number.EPSILON;
if(epsilon >0 && epsilon < 1){

    console.log("0 과 1 사이의 값이다.");
}


const num = 0.1+0.2-0.2; // 부동 소수까지 계산할수 없다.
console.log(num);

function isEqual(n1, n2) {
    return Math.abs(n1 - n2) < epsilon // 두개의 계산 결과 차이가 epsilon 보다 작으면 True
}

console.log(isEqual(1,1));
console.log(isEqual(0.1,0.1));
console.log(isEqual(num,0.1));