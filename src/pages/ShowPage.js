import { useParams } from "react-router-dom"
import { getShowByID } from "../helpers/showsHelper"
function ShowPage(){
    const params = useParams()
    const show = getShowByID(params.showID)
return (
    <div className="ShowPage">
        <h1>{ show.name }</h1>
        <img src={show.image.medium}/>
        <h2>language: {show.language}</h2>
    </div>
)
}
export default ShowPage