const obj = {
    name : '엘리',
    age : 20,
};

// 코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj,key){
    return obj[key];
}

console.log(getValue(obj,'name'));

function addKey(obj,key,value){
    obj[key]=value;
}

addKey(obj,'age',10);
console.log(obj)
console.log(getValue(obj,'age'));

function delKey(obj,key){
    delete obj[key];
}
delKey(obj,'age');

//동적 접근을 좀더 활용하는 코드 필요

const formState = {
    username: '',
    email: '',
    password: '',
};

function updateForm(state, key, value) {
    // 특정 키가 state에 존재할 때만 업데이트하는 안전장치
    if (key in state) {
        state[key] = value;
    } else {
        console.warn(`${key}는 유효한 필드가 아닙니다.`);
    }
}

updateForm(formState, 'username', 'dream-coder');
updateForm(formState, 'email', 'test@test.com');
updateForm(formState, 'badKey', 2123512351);
console.log(formState);