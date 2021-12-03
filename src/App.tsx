import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import {Rating} from './components/Rating/Rating'
import OnOff from './components/OnOff/OnOff'

function App() {
   return (
      <div className={'App'}>

         <PageTitle title={'This is APP component'}/>
         <PageTitle title={'Description'}/>

         <Accordion title={'Menu'}/>
         <Accordion title={'List'}/>

         <Rating/>

         <OnOff onTitle={'On'} offTitle={'Off'}/>

      </div>
   )
}

type PageTitlePropsType = {
   title: string
}

function PageTitle(props: PageTitlePropsType) {
   return <h1>{props.title}</h1>
}


export default App
