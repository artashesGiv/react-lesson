import {useEffect, useState} from 'react'

type clockPropsType = {
   type?: 'default' | 'noSecondMode' | 'arrowMode'
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock = (props: clockPropsType) => {

   const {type} = props

   const [time, setTime] = useState(new Date)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(new Date)
         console.log('tick')
      }, 1000)

      return () => {
         clearInterval(intervalId)
      }
   }, [])

   const defaultType = <>{`${get2digitsString(time.getHours())} : ${get2digitsString(time.getMinutes())} : ${get2digitsString(time.getSeconds())}`}</>
   const noSecondModeType = <>{`${get2digitsString(time.getHours())} : ${get2digitsString(time.getMinutes())}`}</>
   const arrowModeType = <></>

   if (type === 'noSecondMode') return noSecondModeType
   if (type === 'arrowMode') return arrowModeType
   return defaultType

}