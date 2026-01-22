const fruits = [`🍎`, `🍌`,`🍇`,`🍊`];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);
console.log("======================")
for (let i = 1; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 추가  , 삭제 좋지 않은 방식
fruits[4] = '🍓'; // 인덱스에 직접 접근하여 데이터를 추가 하는건 좋지 않다.
console.log(fruits);

fruits[fruits.length] = '🍉'; // 정 필요하면 렝스값 으로 인덱스 접근 가능 하지만 이 또한 안좋은 방식
console.log(fruits);

// 인덱스에 접근하여 삭제하면 삭제 해도 해당 인덱스 값에는 빈 공간이 발생함 이는 메모리 낭비
delete fruits[4];
console.log(fruits);