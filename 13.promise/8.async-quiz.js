// then 으로 엮인 콜백 지옥을 async 로 해결 하라

function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg){
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken(){
    return Promise.resolve(`🌿 => 🐔`);
}
//
// fetchEgg('🐔')
//     .then((message)=>{
//         console.log(message);
//     }) // 성공 한다면
//
// // promise 지옥?
// getChicken()
//     .then(chicken=>
//         fetchEgg(chicken)
//             .then((egg)=>{
//                 fryEgg(egg).then(
//                     console.log(`${egg}`)
//                 )
//             })
//     ).catch(console.error); // 에러의 위치에 따라 체이닝 내부 실행 방식이 달라진다.
//
// /**
//  * 프로미스 체이닝 (Promise Chaining)
//  * 각 단계에서 다음 단계의 '약속'을 리턴함으로써 한 줄로 세웁니다.
//  */
//
// getChicken()
//     .catch(() => '🌿 => 🐥') // 닭을 못 구하면 병아리라도 가져와서 복구!
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then(console.log)
//     .catch(console.error); // 최종 방어선

async function getChickens(){
    let chicken =  await getChicken(); // `🌿 => 🐔`
    let getEgg = await fetchEgg(chicken); // `🌿 => 🐔 => 🥚`
    return await fryEgg(getEgg);   // `🌿 => 🐔 => 🥚 => 🍳`
}

getChickens().then(console.log);
