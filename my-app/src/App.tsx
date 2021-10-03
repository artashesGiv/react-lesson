import React from 'react';
import './App.css';

function App() {
   return (
      <div>
         <AppTitle/>
         <Rating/>
         <Accordion/>
         <Rating/>
      </div>
   );
}

function AppTitle() {
   return <>This is APP component</>
}

function Rating() {
   return <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
   </div>
}

function Star() {
   return <div>
      star
   </div>
}

function Accordion() {
   return <div>
     <AccordionTitle/>
      <AccordionBody/>
   </div>
}


function AccordionTitle() {
   return <div>
      <h3>Menu</h3>
   </div>
}

function AccordionBody() {
   return <div>
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
      </ul>
   </div>
}
export default App;
