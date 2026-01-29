function loop(){
    const arry = [];
    // var 와 let 차이점
    // for 에서 var 로 될 경우 모든 for 가 돈 이후 var 는 5 인 상태로 유지됨
    for (let i = 0; i < 5; i++) {
        arry.push(function (){
            console.log(i);
        });
    }
    return arry;
}

const array = loop();
array.forEach((func)=> func());