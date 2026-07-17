import { useState, useEffect } from 'react'
import MatchCard from '../components/MatchCard'
import '../css/Fixtures.css'
import { getFixtures, getFixturesDate } from '../services/api.js';


function Fixtures(){
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

    const handleSearch = async (e) => {
        setError(null)
        setLoading(true)
            try {
                const date= new Date()
                const id = e.target.id
                switch (id){
                    case "today":
                        date.setDate(date.getDate() + 0);
                        break;
                    case "yesterday":
                        date.setDate(date.getDate()-1);
                        break;
                    case "tommorow":
                        date.setDate(date.getDate()+1);
                        break;
                }
                 
            
                const wantedDate = await getFixturesDate(date);
                setMatches(wantedDate)

            } catch (error) {
                console.log(error)
                setError(error.message || "Failed to get fixtures for the selected date");
            }finally{
                setLoading(false)
            }
        
    }
    const leagues =[1,39,135,78,94,61,288,88,140,2,253,307]

    const filteredMatches= matches.filter(fm => leagues.includes(fm.league.id) )


        return <div>
            <div className='match-fixture'>
            
                    <div className='Date'>
                        <button onClick={handleSearch} id="yesterday" className='date-button' type="submit">Yesterday</button>
                        <button onClick={handleSearch} id='today' className='date-button' type="submit">Today</button>
                        <button onClick={handleSearch} id="tommorow" className='date-button' type="submit">Tommorow</button>
                   </div>
                {error && <div className='error'>{error}</div> }
                {loading ? <div className='loading'>Loading...</div>:
                <div className='match-grid'>
                    {filteredMatches.map(m => <MatchCard match={m} key={m.id} />)}
                    </div>
                
                }
                
            </div>
        </div>
    
    
}

export default Fixtures