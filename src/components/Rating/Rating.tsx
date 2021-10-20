import React, {useState} from 'react'



export function Rating() {

   let [value, setValue] = useState(0)

   return (
      <div>
         <Star value = {() => {setValue(1)}} selected={value > 0}/>
         <Star value = {() => {setValue(2)}} selected={value > 1}/>
         <Star value = {() => {setValue(3)}} selected={value > 2}/>
         <Star value = {() => {setValue(4)}} selected={value > 3}/>
         <Star value = {() => {setValue(5)}} selected={value > 4}/>
      </div>
   )
}

type StarPropsType = {
   selected: boolean
   value: () => void
}

function Star(props: StarPropsType) {

   let starStyle = {
      cursor: 'pointer',
      color: props.selected ? 'red' : 'black',
   }

   return (
      <span style={starStyle} onClick={props.value}>star </span>
   )
}
