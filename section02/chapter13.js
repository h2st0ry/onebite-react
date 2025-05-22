function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor -> 프로미스 객체를 생성하면서 인수로 전달되는 콜백 함수
    console.log("num의 type을 확인하는 중...")

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result)=> {
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });
