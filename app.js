let counter = document.getElementById('count')
const reset = document.getElementById('restart')
const number = document.querySelector('.count')
const leadNumber = 0
let count = 1

counter.addEventListener('click', function(e) {
    e.preventDefault()
    number.innerHTML = `${count++}`
})

reset.addEventListener('click', function(e) {
    e.preventDefault()
    count = 1
    number.innerHTML = `00`
})
