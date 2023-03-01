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

  export default Show