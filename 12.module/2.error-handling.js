// try catch finally

function readFile(path){
    // 예상치 못한 에러 발생
    throw new Error('파일 경로를 찾을수 없음'); // 자바스크립트는 Error 만 던질수 있는가? 자바 처럼 다양한 에러는 없는지?
    return '파일 내용';
}

function processFile(path){

    let content;
    try {
        content = readFile(path);
    }catch(err){
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
        content = '기본내용';
    }finally {
        // 에러가 발생해도 무조건 실행 한다.
        // DB 커넥션 정리 등
        console.log('리소스 정리');
    }
    const result = 'Hi '+content;
    return result;
}

let result = processFile('경로');
console.log(result);

