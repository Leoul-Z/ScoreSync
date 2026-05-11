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
                    const fixtures= await getFixtures()
                    setMatches(fixtures)
            }catch(error){
                setError("Failed to load");
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
            loading? <div>Loading...</div>:
            <div>
            {live.map(m => <MatchCard match={m} key={m.id}/>
            )}
        </div>  
        }
    </div>
}

export default Live