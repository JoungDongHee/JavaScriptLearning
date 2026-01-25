// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
const setFruits = new Set([...fruits]);
console.log([...new Set(setFruits)]); // 배열로 반환
function removeDuplicates(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicates([...new Set(setFruits)]));


// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
// 1 ,2 , 3
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
const set3 = new Set();
set1.forEach((value) => {
    if(set2.has(value)) {
        set3.add(value);
    }
})

function findIntersection(set1, set2) {
    const array = [...set1].filter(x => set2.has(x));
    return new Set(array);
}
let numbers = set1.intersection(set2); // 최신 자바스크립트의 해결책 (ES2024+)
console.log(numbers);
console.log(set3);
console.log(findIntersection(set1, set2));