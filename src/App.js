import './App.css';
import showsData from  './shows-data'

function Show (props) {
  return (
    <div className='show'>
      <img className='show-image'
      src={props.showObject.image.medium} alt={ props.showObject.className}/>
    
      <h1>props.showObject.name</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>The Best TV Shows App</h1>
      <show showObject={showsData[0]}></show>

      
      
    </div>
  );
}

export default App;
