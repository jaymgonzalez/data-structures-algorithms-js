function Stack() {

  let items = []

  this.push = function (element) {
    items.push(element)
  }

  this.pop = function () {
    return items.pop()
  }

  this.peek = function () {
    return items[items.length - 1]
  }

  this.isEmpty = function () {
    return items.length == 0
  }

  this.size = function () {
    return items.length
  }

  this.clear = function () {
    items = []
  }

  this.print = function () {
    console.log(items.toString())
  }
}

let stack = new Stack()

console.log(stack.isEmpty())
stack.push(5)
stack.push(9)
stack.push(54)
stack.push(0)
console.log(stack.peek())
console.log(stack.isEmpty())
stack.pop()
stack.pop()
console.log(stack.size())
stack.print()

//Deciamal to Binary f(x)

function divideBy2(decNumber) {
  let remStack = new Stack()
  let rem
  let binaryString = ''

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

console.log(divideBy2(233))
console.log(divideBy2(10))
console.log(divideBy2(1000))