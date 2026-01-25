//옵셔널 체이닝 연산자 Optional chainin
// ES11 2020
// ?.
// null 또는 udeifined 확인할때
let item = {price:1};
const price = item?.price;
console.log(price);


let obj = {
    name : '🐶',
    owner : {
        name : '엘리'
    }
};

// 옵셔널 체이닝 미 사용시 owner.name 에 접근하기 위해서 장황한 문구가 작성됨
// obj 가 null 아니라면 obj.owner 에 접근하고
const ownerName =  obj && obj.owner && obj.owner.name;
console.log(ownerName);

// 옵셔널 체인 닝 사용할 경우
const optinalName =  obj?.owner?.name;
console.log(optinalName);
