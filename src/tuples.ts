type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postcode: number,
]

function printAddress(...addr: Address) {}
printAddress() // tuple now gives good ordering.