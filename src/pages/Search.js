import { searchForShow } from "../helpers/showsHelper"
import ShowList from "../component/ShowList"
import { useParams} from "react-router-dom" 
import { useState } from "react"
import { useEffect } from "react"
import { setSearchResults } from "react"

function Search () {

    const params = useParams()

    const[searchResults, setSearchRessult] = useState([])

    useEffect ( () => {

    const fetchResults = async () => {
        const shows = await searchForShow(params.searchText)
        setSearchResults(shows) 
    }
    fetchResults()

    })

    return(
        <>
        <h1>Search</h1>
        {
            searchResults.length >  0 ? <ShowList shows={searchResults}/> 
            : <h2>No shows found</h2>
        }
        </>

    )
}



export default Search