
import './App.css'

function App() {

  let item = ['dal','vegetables','roti','oats','fruits','milk']
  
    return <>
      <h1>healthy food</h1>

  <ul className="list-group">
    {item.map((item)=>(<li key={item} className="list-group-item">{item}</li>))}
  
  
</ul>

  </>

}

export default App;

