import './App.css';
import showsData from  './shows-data'

function Show (props) {
  return (
    <div className='show'>
      <img className='show-image'
      src={props.showObject.image.medium} 
      alt={ props.showObject.className}/>
      <h2>{props.showObject.name}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App"> 
      <h1>The Best TV Shows App</h1>

      {showsData.map(show => <Show showObject={show}/>)}
      
</div>
  );

}

export default App;
