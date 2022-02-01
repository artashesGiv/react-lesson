import React, {useState} from 'react'

export default {
   title: 'useState demo',
}

function generateData() {
   // какие то сложные вычисления
   console.log('generate data')
   return 1
}

export const useStateDemo = () => {
   console.log('useStateDemo')
   const [counter, setCounter] = useState(generateData) // useState сделает результат вызова функции инициализационным
   // значением, и запомнит его, и при его изменении не будет вызывать функцию для пофторного просчета

   const changer = (state: number) => state + 1


   return (
      <>
         <button onClick={() => setCounter(changer)}>+</button> {/*setCounter принимает функуию изменитель, и вносит в изменения результат вызова функции*/}
         {counter}
      </>
   )
}

