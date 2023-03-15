import showsData from  '../shows-data';
import ShowList from'../component/ShowList';
function Home(){
    return(
        <div>
            <h2>this is the homepage</h2>
            <ShowList shows={showsData}/>
        </div>
    )
    
}

export default Home;
