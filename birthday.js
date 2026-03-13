//FInd DOB of a person whose birthday is in 10 days
let today = new Date()
let birthday = new Date()

birthday.setDate(today.getDate() + 10);
console.log(birthday.toString())

let currentTime = Date.now() // or new Date().getTime()
let date = new Date(currentTime)
console.log('current time:',date.toLocaleTimeString())