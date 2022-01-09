const formatTime = (seconds) => {
  let MM = Math.floor(seconds / 60)
  let SS = seconds % 60
  if (MM < 10) {
   MM = '0' + `${MM}`
  }
  if (SS < 10) {
   SS = '0' + `${SS}`
  }
  return `${MM} : ${SS}`
}

export default formatTime
