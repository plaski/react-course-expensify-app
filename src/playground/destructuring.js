// const person = {
//   name: 'Maciek',
//   age: 32,
//   location: {
//     city: 'Krakow',
//     temp: -1
//   }
// }

// const { name, age } = person

// console.log(`${name} is ${age}`)

// const { city, temp } = person.location

// console.log(`It's ${temp} in ${city}`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holding',
//   publisher: {
//     // name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)


// const address = ['1299 S Jupiter Street', ' Philadelphia', 'Pensylvania', '19887']

// const [, city, state] = address

// console.log(`You are in ${city}, ${state}`)

const item = ['Coffie(hot)', '2.00', '3.00', '4.00']

const [coffie, , mediumPrice] = item

console.log(`A medium ${coffie} is ${mediumPrice}`)