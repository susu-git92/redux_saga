function sayHi() {
  //statements
  return 'hi'
  return 'world' //was never executed
}

const result = sayHi() {}
console.log(result)  //hi 

const resultGenerator = sayHiGenerator()
// console.log(resultGenerator.next()) { [Iterator] }
console.log(result) //hi


function* sayHiGenerator() {
  yield 'hey'
  yield 'world'
  yield 'guys'
  //statements
  return 'hi'
}


const resultGenerator = sayHiGenerator()
console.log(resultGenerator.next())   //{value: 'hey', done: false}
console.log(resultGenerator.next()) //{value: 'world', done: true}
console.log(resultGenerator.next()) //{value: 'guys', done:true}

const resultGeneratorForOf = sayHiGenerator()

for (const iterator of resultGeneratorForOf) {
  console.log(iterator) //hey, world, guys
}

function* newGenerator() {
  yield 'something'
  const final = yield 'give me value'
  return final
}

const newGeneratorIt = newGenerator()

console.log(newGeneratorIt.next()) //{value: 'something' done: false}
console.log(newGeneratorIt.next())//{value: 'final value' done: false}
console.log(newGeneratorIt.next('give me value'))//{value: 'undefined' done: false}

 
