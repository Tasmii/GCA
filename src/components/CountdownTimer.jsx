import { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 5,
    minutes: 30,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) return { ...prev, seconds: seconds - 1 }
        if (minutes > 0) return { days, hours, minutes: minutes - 1, seconds: 59 }
        if (hours > 0) return { days, hours: hours - 1, minutes: 59, seconds: 59 }
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 }
        
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-blue-800 text-white text-3xl font-bold py-2 px-4 rounded">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm mt-1 uppercase">{unit}</div>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer