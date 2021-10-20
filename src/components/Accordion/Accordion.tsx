import React, {useState} from 'react'

type AccordionPropsType = {
   title: string
}

function Accordion(props: AccordionPropsType) {

   let [collapsed, setCollapsed] = useState(true)
   return (
      <div>
         <AccordionTitle title={props.title} collapsed={() => {
            setCollapsed(!collapsed)
         }}/>
         {
            !collapsed && <AccordionBody/>
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

function AccordionBody() {
   return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
   </ul>
}

export default Accordion