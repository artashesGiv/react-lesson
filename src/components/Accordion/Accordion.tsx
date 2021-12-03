import React, {useReducer} from 'react'
import {reducer} from './Reducer'

type itemType = {
   title: string
   value: any
}

export type AccordionPropsType = {
   title: string
   items: itemType[]
   onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

   // let [collapsed, setCollapsed] = useState(true)
   let [collapsed, dispatch] = useReducer(reducer, true)

   return (
      <div>
         <AccordionTitle title={props.title} collapsed={() => {
            dispatch({type: 'TOGGLE-COLLAPSED'})
         }}/>
         {
            !collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>
         }
      </div>
   )
}

type AccordionTitlePropsType = {
   title: string
   collapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
   const accordionStyle = {
      cursor: 'pointer',
   }

   return (
      <div style={accordionStyle}>
         <h3 onClick={props.collapsed}>{props.title}</h3>
      </div>
   )
}

type AccordionBodyPropsType = {
   items: itemType[]
   onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
   return (
      <ul>
         {props.items.map((i, index) => <li key={index} onClick={() => {
            props.onClick(i.value)
         }}>{i.title}</li>)}
      </ul>
   )
}

export default Accordion