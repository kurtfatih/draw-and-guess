export function generateRandomNumber(max = 100) {
  // find diff
  let difference = max - 0

  // generate random number
  let rand = Math.random()

  // multiply with difference
  rand = Math.floor(rand * difference)

  // add with min value
  rand = rand + 0

  return rand
}
