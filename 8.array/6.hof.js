/**
 * 고차 함수 (Higher-Order Function)
 * 1. 함수를 인자로 받거나 (Callback)
 * 2. 함수를 반환하는 함수
 */

const fruits = ['🍌', '🍓', '🍇', '🍓'];

// 1. forEach: 단순 순회 (반환값 없음)
console.log("===== forEach =====");
fruits.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

// 2. find / findIndex: 조건에 맞는 '첫 번째' 요소 찾기
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 4 };
const item3 = { name: '🍙', price: 5 };
const products = [item1, item2, item3, item2];

// find: 요소 자체를 반환
const foundItem = products.find(value => value.name === '🍪');
console.log('Found:', foundItem);

// findIndex: 요소의 인덱스를 반환
const foundIndex = products.findIndex(value => value.name === '🍪');
console.log('Index:', foundIndex);

// 3. some / every: 조건 존재 여부 확인 (Boolean 반환)
// [수정] value.price = 4 는 대입 연산자입니다. 비교를 위해 === 를 사용해야 합니다.
const hasSpecificPrice = products.some(value => value.price === 4);
console.log('Some(price 4):', hasSpecificPrice);

const isAllCookies = products.every(value => value.name === '🍪');
console.log('Every(is Cookie):', isAllCookies);

// 4. filter: 조건에 맞는 '모든' 요소를 새로운 배열로 추출
const cookies = products.filter(value => value.name === '🍪');
console.log('Filtered Cookies:', cookies);

// 5. map: 각 요소를 변환하여 '새로운 배열' 생성
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(value => value * 2);
console.log('Mapped(x2):', doubled);

// map 활용: 짝수만 2배로 변환 (나머지는 그대로)
const processedNums = nums.map(value => (value % 2 === 0 ? value * 2 : value));
console.log('Processed Map:', processedNums);

// 6. flatMap / flat: 중첩 배열 평탄화 (둘 다 새로운 배열 반환)
// [참고] flat() 역시 원본을 수정하지 않고 '새로운 배열'을 반환합니다.
const nested = [1, 2, [3, 4, [5, 6]]];
console.log('Flat(1):', nested.flat(1)); // 1단계 평탄화

const flatMapped = [1, 2, 3].flatMap(v => [v, v * 2]);
console.log('FlatMapped:', flatMapped); // [1, 2, 2, 4, 3, 6]

// 7. sort: 배열 정렬 (원본을 직접 수정함에 주의!)
const texts = ['hi', 'abc'];
const strings = texts.sort(); // 원본 texts가 변경됨
console.log('Sorted Texts:', strings);
console.log('Sorted Texts:', texts);

const numbers = [0, 1, 2, 3, 4, 10, 5];
// [주의] 숫자 정렬 시 콜백 없이 sort()하면 문자열로 변환되어 '10'이 '2'보다 앞에 옴
numbers.sort((a, b) => a - b); // 오름차순 정렬의 정석
console.log('Sorted Numbers:', numbers);

// 8. reduce: 배열의 요소를 하나로 응축 (누적 계산)
// [형식] .reduce((누적값, 현재값) => { ... }, 초기값)
const sumWithInitial = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 10); // 10부터 시작하여 배열의 모든 합을 더함
console.log('Reduced Sum:', sumWithInitial);