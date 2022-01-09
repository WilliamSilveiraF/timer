import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [breakLength, setBreak] = useState(5)
  const [sessionLength, setSession] = useState(25)
  const [timer, setTimer] = useState({play: 'off', time: 3599})
  const { play, time } = timer

  
  useEffect(() => {
   setTimer({ ...timer, time: sessionLength * 60 })
  }, [sessionLength])

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

  const addBreak = () => {
   if (play == 'on') {
    return window.alert('The timer needs to be stopped')
   }
   breakLength + 1 === 61 ? window.alert('[BREAK] Max time is 60') : setBreak(breakLength + 1)
  }

  const addSession = () => {
   if (play == 'on') {
    return window.alert('The timer needs to be stopped')
   }
   sessionLength + 1 === 61 ? window.alert('[SESSION] Max time is 60') : setSession(sessionLength + 1)
  }

  const downBreak = () => {
   if (play == 'on') {
    return window.alert('The timer needs to be stopped')
   }
   breakLength - 1 === 0 ? window.alert('[BREAK] Min time is 1') : setBreak(breakLength - 1)
  }

  const downSession = () => {
   if (play == 'on') {
    return window.alert('The timer needs to be stopped')
   }
   sessionLength - 1 === 0 ? window.alert('[SESSION] Min time is 1') : setSession(sessionLength - 1)
  }

  const startTimer = () => {
    console.log('reste')
    if (play == 'on') {
      // Can't play two times
      return 
    }
    let timerFake = timer.time
    window.alert('STARTOU')
    const idStart = setInterval(() => {
     console.log(timer)
     console.log(time)
     console.log(breakLength)
     if (timerFake <= 0 || breakLength == 21) {
       console.log('acabou ou pausou')
       clearInterval(idStart)
     } else {
      timerFake -= 1
      setTimer({play: true, time: timerFake})
      console.log(timerFake)
     }
    }, 1000)
  }
  const pauseTimer = () => {
    console.log('teste')
    setBreak(21)
  }
  const recycleTimer = () => {
    window.alert('RECYCLE')
  }
  return (
   <AppContext.Provider
     value={{
       breakLength,
       sessionLength,
       timer,
       setTimer,
       formatTime,
       addBreak,
       addSession,
       downBreak,
       downSession,
       startTimer,
       pauseTimer,
       recycleTimer
     }}
   >
     { children }
   </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
