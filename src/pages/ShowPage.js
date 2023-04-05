import { useParams } from "react-router-dom"
import { getShowByID } from "../helpers/showsHelper"
import NotFound from "./NotFound"
function ShowPage(){
    const params = useParams()
    const show = getShowByID(params.showID)
return (
    <>
{
    !!show ?
    <div className="ShowPage">
        <h1>{ show.name }</h1>
        <img src={show.image.medium}/>
        <h2>language: {show.language}</h2>
        <h3>genre: {show.genres.join(',')}</h3>
        <h4>status: {show.status}</h4>
        <h5>rating: {show.rating.average}</h5>
    </div>
    :
    <NotFound/>
}
</>
)

}
export default ShowPage