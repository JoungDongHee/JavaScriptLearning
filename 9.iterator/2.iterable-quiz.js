// 0 부터 10 이하 까지 숫자의 2배를 순회하는 이터레이터 반복자 만들기
// Symbol.iterator() : Iterator{next() : {value,done}} 를 반환하면 됨
// 0 , 1, ,2,3,...9
// 0 , 2, 4,6,8,...18


const multiple = {
    [Symbol.iterator]() {
        const max = 10; // 반복 횟수
        let count = 0;  // 0부터 시작하기 위해 카운터 설정

        return {
            next() {
                // done: true가 되면 순회가 종료됨
                const isDone = count >= max;
                // value: 현재 카운트의 2배를 계산하고 카운트 증가
                const currentVal = isDone ? undefined : count * 2;

                if (!isDone) {
                    count++; // 다음 순회를 위해 증가
                }

                return { value: currentVal, done: isDone };
            }
        };
    }
};

for (const number of multiple) {
    console.log(number);
}