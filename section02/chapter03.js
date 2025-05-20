// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 귀찮게 할당하는 법
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;
console.log(one, two, three);



// 2. 객체의 구조 분해 할당
let person = {
    name : "박연희",
    age : 22,
    hobby: "테니스",
};

let {name, age, hobby, extra = "음음",} = person;
console.log(name, age, hobby);




// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(person);