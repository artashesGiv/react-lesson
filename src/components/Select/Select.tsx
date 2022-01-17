import React, {useState, KeyboardEvent, useEffect} from 'react'
import s from './Select.module.css'

type itemType = {
   title: string
   value: any
   population?: number
}

type SelectPropsType = {
   value?: any
   items: itemType[]
   onChange: (value: any) => void
}

export const Select = (props: SelectPropsType) => {
   console.log('select')
   const [active, setActive] = useState(false)
   const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
   const toggleItems = () => setActive(!active)
   const selectedItem = props.items.find(i => i.value === props.value)
   const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

   useEffect(() => {
      setHoveredElementValue(props.value)
   }, [props.value])

   const onClickItem = (value: any) => {
      props.onChange(value)
      toggleItems()
   }
   const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
         for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {

               const challengerElement = e.key === 'ArrowDown'
                  ? props.items[i + 1]
                  : props.items[i - 1]

               if (challengerElement) {
                  props.onChange(challengerElement.value)
                  return
               }
            }
         }
         if (!selectedItem) {
            props.onChange(props.items[0].value)
         }
      }
      if (e.key === 'Enter' || e.key === 'Escape') {
         setActive(false)
      }
   }

   return (
      <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
         <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
         {
            active &&
             <div className={s.items}>
                {
                   props.items.map((i) =>
                      <div key={i.value}
                           onClick={() => onClickItem(i.value)}
                           className={`${s.item} ${hoveredItem === i ? s.selected : ''}`}
                           onMouseEnter={() => setHoveredElementValue(i.value)}
                      >
                         {i.title}
                      </div>)
                }
             </div>
         }
      </div>
   )
}