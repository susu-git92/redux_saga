//Generator 문법 배우기

//이 문법의 핵심 기능
//1.함수를 작성할 때 함수를 특정 구간에 멈춰놓을 수도 있고, 
//2.원할 때 다시 돌아가게 할 수도 있다.
//3.그리고 결과값을 여러번 반환 할 수도 있다.

//예를 들어 다음과 같은 함수가 있다고 가정해보다.
function weirdFunction () {
  return 1;
  return 2;
  return 3;
  return 4;
  return 5;
}

//사실 함수에서 값을 여러번에 걸쳐서 반환하는것은 불가능하다.
//이 함수는 호출할때마다 무조건 1을 반환하게 될것이다.
//하지만 제너레이터 함수를 사용하면, 함수에서 값을 순차적으로 반환할수있다!
//함수의 흐름을 도중에 멈춰놓다가 나중에 이어서 진행할수도있다.

function* generatorFunction() {
  console.log('안녕하세요?');
  yield 1;
  console.log('제너레이터 함수');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}
//제너레이터 함수를 만들때는 function* 이라는 키워드를 사용한다.
//제너레이터 함수를 호출했을때는 한 객체가 반환되는데, 이를 제너레이터라고 부른다!
//함수를 작성한 뒤 다음 코드를 사용해 제너레이터를 생성해보아라.

const generator = generatorFunction();

//제너레이터 함수를 호출한다고 해서 해당함수안의 코드가 바로 시작되진 않는다.
//generator.next()를 호출해야만 코드가 실행되며, yield를 한값을 반환하고
//코드의 흐름을 멈춘다.

//코드의 흐름이 멈추고 나서 generator.next()를 다시 호출하면 흐름이 이어서 다시 시작됨.

//제너레이터 함수 또다른 예시를 보자면
//next를 호출할때 인자를 전달하여 
//이를 제너레이터 함수 내부에서 사용할 수도 있습니다.
function* sumGenerator() {
  console.log('sumGenerator이 시작됐습니다.');
  let a = yield;
  console.log('a값을 받았습니다.');
  let b = yield;
  console.log('b값을 받았습니다.');
  yield a + b;
}


//!!!제목 : Generator로 액션 모니터링하기
//redux-saga는 액션을 모니터링 할 수 있다고 소개했었는데, Generator를 통해 모니터링이
//어떻게 이루어지는지 예시코드를 작성해보면서 배워보도록 하겠다.
//다음 코드를 크롬개발자 도구 콘솔에 적어보자
function* watchGenerator() {
  console.log('모니터링 시작!');
  while(true) {
    const action = yield;
    if (action.type === 'HELLO') {
      console.log('안녕하세요?');
    }
    if (action.type === 'BYE') {
      console.log('안녕히가세요.');
    }
  }
}

//이제 제너레이터 함수를 호출하여 제너레이터를 만들고, next()를호출해보겠다.










