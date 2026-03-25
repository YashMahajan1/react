
import './App.css'
import Fooditems from './components/fooditems';
import Error from './components/error';
import Container from './components/container';

function App() {
//with if else we can check condition also
  let item = ['dal','vegetables','roti','oats','fruits','milk']
  //let ternare = item.length===0 ? <h3>still hungry</h3>:null; {ternare}
     
   return <>
    <Container>
    <h1 className='head'>HEALTHY FOOD</h1>
        <Error food ={item}></Error>
  <Fooditems food ={item}></Fooditems>

  </Container>
  <Container>
    <p>above is list of  the healthy food </p>
  </Container>

   </>
}

export default App;

