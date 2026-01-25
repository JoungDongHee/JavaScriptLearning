function getBanan(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('🍌')
        },1000);
    })
}

function getApple(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('🍎')
        },3000)
    });
}

function getOrange(){
    return Promise.reject(new Error("no orange"));
}

// 콜백 함수 지옥
// function fetchFruits(){
//     return getBanan() // retrun promise
//         .then((banana)=> // 1초뒤 바나나 반환
//             getApple()  // retrun promise 3초
//                 .then((apple) => [banana,apple]) // return 배열
//         )// 모든 로직이 끝나면 promise 를 반환
// }

// 비동기 처럼 수행
async function fetchFruits(){
    const banana = await getBanan(); // promise 반환
    const apple = await getApple(); // promise 반환
    return [banana, apple];
}


fetchFruits()
    .then(console.log)




