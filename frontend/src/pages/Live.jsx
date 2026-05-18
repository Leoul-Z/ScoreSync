import { useState, useEffect } from 'react'
import '../css/Live.css'
import MatchCard from '../components/MatchCard'
import { getFixtures } from '../services/api.js'; 

function Live() {
 const [matches, setMatches]= useState([]);
 const[error, setError]=useState(null)
 const[loading, setLoading]=useState(true)

    useEffect (()=>{
        const loadFixtures= async () => { 
            try{
                    setError(null)
                    const fixtures= await getFixtures()
                    setMatches(fixtures)
            }catch(error){
                setError(error.message || "Failed to load fixtures");
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }
        loadFixtures()
    },[])

    const leagues =[39,135,78,94,61,288,88,140,2,253,307]

    const filteredMatches= matches.filter(fm => leagues.includes(fm.league.id) )


    const live = filteredMatches.filter(
                m=> m.fixture.status.long!=="Match Finished" && m.fixture.status.long !== "Not Started" && m.fixture.status.long!=="Match Postponed" && m.fixture.status.long!=="Match Cancelled" 
            )


    return <div className='match-live'>
    {error && <div className="error">{error}</div> }
        {
            loading ? <div className='loading'>Loading live games...</div> :
            live.length > 0 ? (
                <div>
                    {live.map(m => <MatchCard match={m} key={m.id}/>)}
                </div>
            ) : (
                <div className="no-matches-notice">
                    <span className="accent-text">No Live Matches</span>
                    <p>There are no matches currently in progress. Click on "View Fixtures" to check the schedule for upcoming games!</p>
                </div>
            )
        }
    </div>
}

export default Live