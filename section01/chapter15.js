// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)


// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "박연희",
    age : 22,
    hobby : "노래 듣기",
};


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];


// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "홈 프로텍터";
person["favoritefood"] = "떡볶이";


// 3.2 프로퍼티를 삭제하는 방법
delete person.jog;



// 3.3 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;



