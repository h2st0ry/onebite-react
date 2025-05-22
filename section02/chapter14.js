// async
// 어떤 함수를 비동기 함소루 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해 주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "박연희",
        id: "Yhee0",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
