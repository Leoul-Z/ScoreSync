import { useState, useEffect } from 'react'
import MatchCard from '../components/MatchCard'
import '../css/Fixtures.css'
import { getFixtures } from '../services/api.js';


function Fixtures(){
    const [matches, setMatches]= useState([]);
    const[error, setError]=useState(null)
    const[loading, setLoading]=useState(true)


    useEffect (()=>{


        const loadFixtures= async () => { 
            try{
                    const fixtures= await getFixtures()
                    setMatches(fixtures)
                    console.log(fixtures)
                   
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


        return <div>
            <div className='match-fixture'>
                {error && <div>{error}</div> }

                {loading ? <div className='loading'>Loading...</div>:
                <div className='match-grid'>
                    {matches.map(m => <MatchCard match={m} key={m.id} />)}
                    </div>
                
                }
                
            </div>
        </div>
    
    
}

export default Fixtures