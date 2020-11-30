

//Date Form----------------------------------------------------------------------------------------------------------

const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day')

const DaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let year = []
for(let i = 2020; i <= 2099; i++) {
    year.push( `<option> ${i} </option>`)
}
$year.innerHTML = year.join('')

let month = []
for(let i = 1; i <= 12; i++) {
    month.push( `<option> ${i} </option>`)
}
$month.innerHTML = month.join('')

$month.addEventListener ('change', function(){
        let day = []
    for(let i = 1; i <= DaysInMonth[$month.value -1]; i++) {
        day.push( `<option> ${i} </option>`)
    }
    $day.innerHTML = day.join('')
    }) 


//Timer-------------------------------------------------------------------------------------------------------------------

const $container = document.getElementById('timer')

let targetDate = {
    hours: 23,
    minutes: 2,
    seconds: 12,
}
//protype above

setInterval(function () {

    targetDate.seconds -= 1

    $container.innerHTML =`

    ${targetDate.hours} hours
    ${targetDate.minutes} minutes
    ${targetDate.seconds} seconds

` 
}, 1000)

$container.innerHTML =`

    ${targetDate.hours} hours
    ${targetDate.minutes} minutes
    ${targetDate.seconds} seconds
`

//storing date-------------------------------------------------------------------------------------

let date = new Date()

//above needs to come from form


let storeddate = {
    year: date.getFullYear(),
    month: date.getMonth,
    day: date.getDate,
}

localStorage.setItem('targetDate' , JSON.stringify(storeddate))

console.log(JSON.parse (localStorage.getItem('targetDate')))

//date conversion-------------------------

let now = new Date()
let futureDate = new Date() //need to get this connected to form//

console.log('current date', now.getTime())
console.log('future date' , futureDate.getTime())

let difference = futureDate.getTime() - now.getTime()

console.log(difference)

function toDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60/ 24)
}

function toHours(ms) {

let days = Math.floor(ms / 1000 / 60 / 60/ 24)
let hours = Math.floor(ms / 1000 / 60 / 60)

    let remainingHours = hours - (days * 24)
    return remainingHours
}

function toMinutes(ms){
    let hours = Math.floor(ms / 1000 / 60 / 60)
    let minutes = Math.floor(ms / 1000 / 60)

    let remainingminutes = minutes - (hours* 60)

    return remainingminutes
}

setInterval(function () {

    difference -= 1000

    $container.innerHTML =`

    ${toDays (difference)} days

    ${toHours (difference)} hours
` 
}, 1000)