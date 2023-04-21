var daysContainer = document.querySelector("#days")
var hoursContainer = document.querySelector("#hours")
var minutesContainer = document.querySelector("#minutes")
var secondsContainer = document.querySelector("#seconds")

function updateCountdown() {
  var newYear = new Date("January 1, 2024 00:00:00")
  var currentTime = new Date()

  var diff = newYear - currentTime

  var days = Math.floor(diff / (1000 * 60 * 60 * 24))
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((diff % (1000 * 60)) / 1000)

  daysContainer.innerHTML = days + "<span> Days</span>"
  hoursContainer.innerHTML = hours + "<span> Hours</span>"
  minutesContainer.innerHTML = minutes + "<span> Minutes</span>"
  secondsContainer.innerHTML = seconds + "<span> Seconds</span>"
}

setInterval(updateCountdown, 1000)
