
import './App.css'

function App() {

  let item = ['dal','vegetables','roti','oats','fruits','milk']
  //let ternare = item.length===0 ? <h3>still hungry</h3>:null; {ternare}
 let logical =item.length===0&& <h3>still hungry</h3>
 
    return <>
      <h1>healthy food</h1>
    {logical}
  <ul className="list-group">
    {item.map((item)=>(<li key={item} className="list-group-item">{item}</li>))}
  
  
</ul>

  </>

}

export default App;

