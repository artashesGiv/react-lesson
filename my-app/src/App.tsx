import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title = {'This is APP component'}/>
            <PageTitle title = {'Description'}/>
            <Rating value={3}/>
            <Accordion title = {'Menu'}/>
            <Accordion title = {'List'}/>
            <Rating value={2}/>
            <Rating value={0}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.value}</h1>
}


export default App
