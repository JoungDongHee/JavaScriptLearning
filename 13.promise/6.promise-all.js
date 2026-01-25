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


// 바나나 와 사과를 같이 가져오기
getBanan() // retrun promise
    .then((banana)=> // 1초뒤 바나나 반환
        getApple()  // retrun promise 3초
        .then((apple) => [banana,apple]) // return 배열
    )// 모든 로직이 끝나면
    .then((results) => console.log(results)) // 모든 로직 까지 4초 필요


// promise.all 병렬적으로 한번에 모든 Promise 들을 실행
Promise.all([getBanan(), getApple()])
.then((results) => console.log('all : ',results))

//Promise.race 주어진 Promise 중에 제일 빨리 수행된 것을 반환함
Promise.race([getBanan(), getApple()])
.then(results => console.log('race : ', results))


//  Promise.reject is not a constructor
Promise.all([getBanan(), getApple() , getOrange()]) // error
    .then((results) => console.log('all error : ',results))
    .catch((message) =>console.log(message))

// 에러의 원인을 배열로 반환하게 됨 잘 사용안할듯?
Promise.allSettled([getBanan(), getApple() , getOrange()]) // error
    .then((results) => console.log('all error : ',results))
    .catch((message) =>console.log(message))