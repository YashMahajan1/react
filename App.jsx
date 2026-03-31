
import './App.css'
import Fooditems from './components/fooditems';
import Error from './components/error';
import Container from './components/container';
import Input from './components/Foodinputes';
import { useState } from 'react';
//'salad','vegetables','roti','oats'
function App() {

 let [item,setitem]= useState([])

  const onKeyDown =(event)=>{
    if(event.key === 'Enter'){
      let newfooditem = event.target.value;
      let newitem = [...item,newfooditem]
      setitem(newitem)

    }
    
  }

   return <>
    <Container>
          <h1 className='head'>HEALTHY FOOD</h1>
      <Input onKeyDown={onKeyDown}></Input>
       <Error food ={item}></Error>
  <Fooditems food ={item}></Fooditems>

  </Container>
  {/* <Container>
    <p>above is list of  the healthy food </p>
  </Container> */}

   </>
}

export default App;

