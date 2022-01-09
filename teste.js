let seconds = 10

const idVar = setInterval(() => {
  if (seconds <= 0) {
   clearInterval(idVar)
  } else {
   seconds -= 1
   console.log(seconds)
  }
}, 1000, console.log('VASCO'))
