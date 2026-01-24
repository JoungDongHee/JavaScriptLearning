
function makeIterable(initialValue , maxValue , callback) {
    return {
        [Symbol.iterator]() {
            let count = initialValue;  // 0부터 시작하기 위해 카운터 설정
            return {
                next() {
                    // done: true가 되면 순회가 종료됨
                    const isDone = count >= maxValue;
                    // value: 현재 카운트의 2배를 계산하고 카운트 증가
                    const currentVal = isDone ? undefined : callback(count);

                    if (!isDone) {
                        count++; // 다음 순회를 위해 증가
                    }

                    return { value: currentVal, done: isDone };
                }
            };
        }
    }
}

const multiple = makeIterable(0,10,(n)=> n*2);
for(const value of multiple){
    console.log(value)
}
