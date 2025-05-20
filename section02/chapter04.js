// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], 5, 6]; // 위험 요소가 많은 방식
let arr3 = [4, ...arr1, 5, 6];
//console.log(arr3);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};
//console.log(obj2);


// 2. Rest 매개변수
// -> Rest 는 나머지, 나머지 매개변수
function funcB(...rest) {
    console.log(rest);
}

funcB(...arr3);
