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
        <h3>genre: {show.genres}</h3>
        <h4>status: {show.status}</h4>
        <h5>runtime: {show.runtime}
        averageruntime: {show.averageRuntime}</h5>
        <h6>rating: {show.average}</h6>
    </div>
)
}
export default ShowPage