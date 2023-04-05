import { getHomeShows } from '../helpers/showsHelper';
import ShowList from'../component/ShowList';

const showsData = getHomeShows()

function Home(){
    return(
        <>
        {
            !!showsData ?
            <div className="HomePage">
            <h2>this is the homepage</h2>
            <ShowList shows={showsData}/>
            </div>
            :
            <h1>couldn't load shows</h1>
        }
        </>
    )
    
}

export default Home;
