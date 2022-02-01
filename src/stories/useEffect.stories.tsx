import {useEffect, useState} from 'react'

export default {
   title: 'useEffect demo',
}

export const useEffectDemo = () => {
   const [counter, setCounter] = useState(1)
   console.log('useEffect demo')

   useEffect(() => {
      console.log('useEffect')
      document.title = counter.toString()
   }) // срабатывает только после первой отрисовки компоненты
   // если нет зависимостей - срабатывает каждый рендер
   // пустой массив зависимостей [] - один раз при первой отрисовке
   // передаем зависимость [counter] - при изменении зависимости

   return (
      <>
         {counter}
         <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      </>
   )
}

export const SetTimeoutExample = () => {
   const [counter, setCounter] = useState(1)
   console.log('SetTimeoutExample')

   useEffect(() => {
      console.log('setTimeout')
      setTimeout(() => {
         document.title = counter.toString()
      }, 1000)
   }, [counter])

   return (
      <>
         {counter}
         <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      </>
   )
}

export const SetIntervalExample = () => {
   const [counter, setCounter] = useState(1)
   const [fake, setFake] = useState(1)
   console.log('setInterval')

   useEffect(() => {
      setInterval(() => {
         console.log('tick ' + counter)
         setCounter(prev => prev + 1)
      }, 1000)
   }, [])

   return (
      <>
         Counter: {counter} - fake: {fake}
      </>
   )
}

