import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [breakLength, setBreak] = useState(5)
  const [sessionLength, setSession] = useState(25)
  const [isPlaying, setPlaying] = useState(false)
  const [typePlayed, setType] = useState('SESSION')
  const [time, setTime] = useState(1800)
  
  useEffect(() => {
    setTime(sessionLength * 60)
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
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   breakLength + 1 === 61 ? window.alert('[BREAK] Max time is 60') : setBreak(breakLength + 1)
  }

  const addSession = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   sessionLength + 1 === 61 ? window.alert('[SESSION] Max time is 60') : setSession(sessionLength + 1)
  }

  const downBreak = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   breakLength - 1 === 0 ? window.alert('[BREAK] Min time is 1') : setBreak(breakLength - 1)
  }

  const downSession = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   sessionLength - 1 === 0 ? window.alert('[SESSION] Min time is 1') : setSession(sessionLength - 1)
  }
  
  let idTimer;
  const startTimer = () => {
    idTimer = !idTimer && setInterval(() => {
      setTime(prevTime => prevTime - 1)
      
    }, 1000)
    
    if (!isPlaying || time <= 0) clearInterval(idTimer)
    if (time <= 0) {
      if (typePlayed == 'SESSION') {
        setType('BREAK')
        setTime(breakLength * 60)
      } else {
        setType('SESSION')
        setTime(sessionLength * 60)
      }
    }
  }

  useEffect(() => {
    startTimer()

    return () => clearInterval(idTimer)
  }, [isPlaying, time])
  
  const goTimer = () => {
    setPlaying(true)
    startTimer()
  }
  const pauseTimer = () => {
    setPlaying(false)
  }
  const recycleTimer = () => {
    setPlaying(false)
    setTime(sessionLength * 60)
  }

  return (
   <AppContext.Provider
     value={{
       time,
       breakLength,
       sessionLength,
       formatTime,
       addBreak,
       addSession,
       downBreak,
       downSession,
       goTimer,
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
