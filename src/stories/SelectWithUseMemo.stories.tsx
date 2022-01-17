import React, {useMemo, useState} from 'react'
import {Select} from '../components/Select/Select'

export default {
   title: 'SelectWithUseMemo',
}

const citiesState = [
   {
      Country: 'Russia',
      cities: [{title: 'Moscow', value: '1', populationMln: 11.9}, {title: 'Saint Petersburg', value: '2', populationMln: 4.9}, {title: 'Krasnodar', value: '3', populationMln: 0.95}],
   },
   {
      Country: 'Ukraine',
      cities: [{title: 'Kiev', value: '1', populationMln: 2.9}, {title: 'Kharkov', value: '2', populationMln: 1.4}, {title: 'Odessa', value: '3', populationMln: 1}],
   },
   {
      Country: 'Belarus',
      cities: [{title: 'Minsk', value: '1', populationMln: 2}, {title: 'Brest', value: '2', populationMln: 0.3}, {title: 'Grodno', value: '3', populationMln: 0.3}],
   },
]

const SelectMemo = React.memo(Select)

export const SelectCities = () => {
   const [value, setValue] = useState('1')
   const [countValue, setCountValue] = useState(0)

   const newArrayCities = useMemo(() => {
      return citiesState[0].cities.filter(c => c.populationMln > 1 )
   }, [citiesState[0].cities]);

   return (
      <>
         <button onClick={() => setCountValue(() => countValue + 1)}>+</button>
         {countValue}
         <SelectMemo value={value} items={newArrayCities} onChange={setValue}/>
      </>
   )
}

