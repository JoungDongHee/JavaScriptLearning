// 에러는 전파 된다.
// 에러를 처리하지 않을 경우 상위 메서드 를 계속 타게 된다
// a -> b -> c
// 에러를 catch 해서 처리를 못할 경우 더욱 상위 메서드에서 처리할수 있다.
function a(){
    throw new Error('Error');
}

function b() {
    try {
        a();
    } catch (e) {
        console.log('b()에서 에러를 확인했습니다. 로그만 남기고 다시 던집니다.');
        throw new Error(`[b에서 추가한 정보] + ${e.message}`); // Re-throw
    }
}
function c(){
    b();
}

try {
    c();
}catch(e){
    console.log('Could not c()');
    console.log(e.message);
}