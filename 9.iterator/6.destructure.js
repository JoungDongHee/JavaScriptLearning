// 구조분해 할당
// 구조분해 할당은 이미 구조화 된 (ex Array?) 와 같은 객체들 을 분해 하여
// 각각의 요소에 이름을 지어주는 것 을 말한다.
const fruits = ['🍏','🥝','🍓','🍌'];
const [first, second,...other] = fruits;
console.log(first);
console.log(second);
console.log(other);

const point = [1,2,8];
const [x, y,z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple','🍎'];
}

const [title,emoji]=createEmoji();
console.log(title);
console.log(emoji);

// 코드는 이게 좀더 깔끔해 보이나... 안에 변수가 많을 경우 불편할듯
// 자바에서 build 쓸건지 아니면 단순 DTO 에 getter setter 만 만들건지 와 같은 느낌
const ellie = {name : 'ellie',age: 20,job:'sw engineer'};
function display({name,age,job}) {
    console.log(`이름 ${name}`);
    console.log(`나이 ${age}`);
    console.log(`직업 ${job}`);
}

display(ellie);


// Quiz
// 구조 분해 할당을 통해 color 을 출력
// 중첩된 구조 분해 할당 `:` 사용
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};



function changeColor({name, styles:{size, color} }) {
    console.log(`name ${name}`);
    console.log(`styles.size ${size}`);
    console.log(`styles.color ${color}`);
}

changeColor(prop);