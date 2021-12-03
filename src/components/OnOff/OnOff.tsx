import React, {useState} from 'react'

type OnnOffPropsType = {
   /**
    * Надпись на кнопке включения
    */
   onTitle: string
   /**
    * Надпись на кнопке выключения
    */
   offTitle: string
   /**
    * Цвет включенного тумблера
    */
   colorOn?: string
   /**
    * Цвет выключенного тумблера
    */
   colorOff?: string
}

const OnOff = (props: OnnOffPropsType) => {
   const colorOn = props.colorOn ? props.colorOn : 'green'
   const colorOff = props.colorOff ? props.colorOff : 'red'
   // const onTitle = props.onTitle ? props.onTitle : 'On'
   // const offTitle = props.offTitle ? props.offTitle : 'Off'

   let [on, setOn] = useState(true)

   const onStyle = {
      border: '1px solid black',
      display: 'inline-block',
      padding: '2px',
      backgroundColor: !on ? 'white' : colorOn,
      cursor: 'pointer',
   }
   const offStyle = {
      border: '1px solid black',
      display: 'inline-block',
      marginLeft: '5px',
      padding: '2px',
      backgroundColor: on ? 'white' : colorOff,
      cursor: 'pointer',

   }
   const indicatorStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      border: '1px solid black',
      display: 'inline-block',
      marginLeft: '5px',
      backgroundColor: on ? colorOn : colorOff,
   }


   return (
      <div>
         <div style={onStyle} onClick={() => {
            setOn(true)
         }}>{props.onTitle}
         </div>
         <div style={offStyle} onClick={() => {
            setOn(false)
         }}>{props.offTitle}
         </div>
         <div style={indicatorStyle}/>
      </div>
   )
}

export default OnOff