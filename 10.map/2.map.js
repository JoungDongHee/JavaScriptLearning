// Map
// Map 은 유일한 키를 가지는 객체
// key 가 중복일 경우 값이 덮어씌워짐
// key 가 다르다면 동일한 값을 가질수 있음
// 순서 상관없음
const map = new Map([
    ['key1','🍌'],
    ['key2','🍎']
]);

console.log(map);

//사이즈 확인
console.log(map.size)
//존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key3')); // false
//순회
map.forEach((value, key,map) => {
    console.log("----")
    console.log(key, value); // 키와 값을 의도대로 사용하려면 순서를 바꿔야 합니다.
    console.log(map);
    console.log("----")
});

console.log(map.keys()); // key 만 출력
console.log(map.values()); // values 만 출력


//찾기
console.log(map.get('key1'));
console.log(map.get('key5')); // unde

//추가
map.set('key3','🥝');
console.log(map);

// 삭제
map.delete('key1');
console.log(map);

//전부 삭제
map.clear();
console.log(map);

const key = {name:'milk',price:19};
const milk = {name:'milk',price:19,description : '맛있는 우유'};
const obj = {
    [key]:key,
}
console.log(obj);
const map2 = new Map([[key,milk]])
console.log(map2);

console.log(obj[key]); // obj 는 동적으로 접근 가능
console.log(map2.get(key)); // map 은 오로지 get 메서드에 key 를 전달해야만됨
