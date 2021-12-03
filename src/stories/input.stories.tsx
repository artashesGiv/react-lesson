import React, {ChangeEvent, useRef, useState} from 'react'

export default {
   title: 'input',
}


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
   const [value, setValue] = useState('')
   const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

   return <>
      <input onChange={onChange}
      />
      ---- {value} ----
   </>
}

export const GetValueOfUncontrolledInput = () => {
   const [value, setValue] = useState('')
   const ref = useRef<HTMLInputElement>(null)
   const save = () => {
      const el = ref.current as HTMLInputElement
      setValue(el.value)
   }

   return (
      <>
         <input ref={ref}/>
         <button onClick={save}>save</button>
         ---- actual value: {value} ----
      </>
   )
}

export const ControlledInputWithFixedValues = () => <input value={'Art'}/>


// control
export const ControlledInput = () => {
   const [value, setValue] = useState('')
   const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

   return (
      <>
         <input value={value} onChange={onChange}
         />
         ---- {value} ----
      </>
   )
}

export const ControlledCheckbox = () => {
   const [value, setValue] = useState(false)
   const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)

   return (
      <>
         <input type={'checkbox'} checked={value} onChange={onChange}
         />
         ---- {JSON.stringify(value)} ----
      </>
   )
}
export const ControlledSelect = () => {
   const [value, setValue] = useState<string | undefined>(undefined)
   const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.currentTarget.value)
   }

   return (
      <>
         <select value={value} onChange={onChange}>
            <option>none</option>
            <option value="1">MINSK</option>
            <option value="2">MOSCOW</option>
            <option value="3">KIEV</option>
         </select>
          ---- {JSON.stringify(value)} ----
      </>
   )
}