import Show from "./Show"

function ShowList(props){

return(
    <div classname="ShowList">
{props.shows.map( x => <Show  key= {x.id}showObject={x} />)}
    </div>
    
)

}

export default ShowList