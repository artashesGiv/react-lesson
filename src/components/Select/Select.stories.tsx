import React, {useState} from 'react'
import {Select} from './Select'

export default {
   component: Select,
}

export const WithValue = () => {
   const [value, setValue] = useState('3')
   return (
      <Select value={value} items={[
         {title: 'Art', value: '1'},
         {title: 'Mak', value: '3'},
         {title: 'Dav', value: '5'},
      ]} onChange={setValue}/>
   )
}

export const WithoutValue = () => {
   const [value, setValue] = useState(null)
   return (
      <Select value={value} items={[
         {title: 'Art', value: '1'},
         {title: 'Mak', value: '3'},
         {title: 'Dav', value: '5'},
      ]} onChange={setValue}/>
   )
}