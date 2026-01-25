// 주석 comments
// 한줄 짜리 주석을 작성할때 씀
// TODO(엘리) : 해야할일 작성
// TODO(엘리) : xx기능 구현 하기

/**
 *  주석은 코드 자체를 설명하는 것이 아니라
 *  코드가 읽어도 로직이 한눈에 보이도록 한다.
 *  왜(why) 와 어떻게(HOW) 를 설명하는게 좋음
 *  단 . 정말 필요한 경우에만 작성
 */

// 외부에서 많이 쓰이는 함수 API 인 경우 JSdoc 를 사용하면 좋음

/**
 * 주어진 두 이자를 더한 값을 반환함
 * @param a 숫자 1
 * @param b 숫자 2
 * @returns {*} a 와 b 를 더한값
 */
function add(a,b){
    return a + b;
}
// 주석의 좋은 예제
/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
//map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];