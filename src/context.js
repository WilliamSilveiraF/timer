import React, { useState, useContext, useEffect } from 'react';
import formatTime from './features/formatTime';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [breakLength, setBreak] = useState(5)
  const [sessionLength, setSession] = useState(25)
  const [isPlaying, setPlaying] = useState(false)
  const [typePlayed, setType] = useState('Session')
  const [time, setTime] = useState(1800)
  const bipAudio = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav')

  /*=== Update Time while change the sessionLength === */
  useEffect(() => {
    setTime(sessionLength * 60)
  }, [sessionLength])

  /*=== setLengths ===*/

  const addBreak = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   breakLength + 1 === 61 ? window.alert('[BREAK] Max time is 60') : setBreak(prev => prev + 1)
  }

  const addSession = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   sessionLength + 1 === 61 ? window.alert('[SESSION] Max time is 60') : setSession(prev => prev + 1)
  }

  const downBreak = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   breakLength - 1 === 0 ? window.alert('[BREAK] Min time is 1') : setBreak(prev => prev - 1)
  }

  const downSession = () => {
   if (isPlaying) {
    return window.alert('The timer needs to be stopped')
   }
   sessionLength - 1 === 0 ? window.alert('[SESSION] Min time is 1') : setSession(prev => prev - 1)
  }

  /*=== Play the Timer ===*/
  let idTimer;
  const startTimer = () => {
    idTimer = !idTimer && setInterval(() => {
      setTime(prevTime => prevTime - 1)
      
    }, 1000)
    if (time <= 60 && 3 <= time && time % 4 === 0 && isPlaying) bipAudio.play()
    if (!isPlaying || time <= 0) clearInterval(idTimer)
    if (time <= 0) {
      if (typePlayed === 'Session') {
        setType('Break')
        setTime(breakLength * 60)
      } else {
        setType('Session')
        setTime(sessionLength * 60)
      }
    }
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(idTimer)
  }, [isPlaying, time, idTimer, startTimer])
  
  const goTimer = () => {
    if (isPlaying) return null
    setPlaying(true)
    startTimer()
  }
  /*=== Pause the timer ===*/
  const pauseTimer = () => {
    setPlaying(false)
  }
  /*=== Recycle the timer ===*/
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
       typePlayed,
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
