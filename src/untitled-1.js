function sayHi() {
  //statements
  return 'hi'
  return 'world' //was never executed
}

const result = sayHi()
console.log(result)   

function sayHiGenerator(params) {
  yield 'hey'
  return 'hi'
}

const resultGenerator = sayHiGenerator()
console.log(resultGenerator.next()) { [Iterator] }

function* sayHiGenerator() {
  yield 'hey'
  return 'hi'
}


const resultGenerator = sayHiGenerator()
console.log(resultGenerator.next())   //{value: 'hey', done: false}