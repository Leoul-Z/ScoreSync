import { useState, useEffect } from 'react'
import MatchCard from '../components/MatchCard'
import '../css/Fixtures.css'
import { getFixtures, getFixturesDate } from '../services/api.js';


function Fixtures(){
    const [matches, setMatches]= useState([]);
    const [date, setDate]= useState("");
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

    const handleSearch = async (e) => {
        e.preventDefault()

        setLoading(true)   
            try {
                const wantedDate = await getFixturesDate(date);
                setMatches(wantedDate)

            } catch (error) {
                console.log(error)
                setError("Failed to get date")
            }finally{
                setLoading(false)
            }
            console.log("DATE SENT:", date);
        
    }
    const leagues =[39,135,78,94,61,288,88,140,2,253,307]

    const filteredMatches= matches.filter(fm => leagues.includes(fm.league.id) )


        return <div>
            <div className='match-fixture'>
             

                    <form  onSubmit={handleSearch} className='Date'>
                        <label htmlFor="date">Date</label>
                        <input 
                        type='date' 
                        id='date' 
                        value={date} 
                        onChange={(e)=> setDate(e.target.value)}
                        />
                        <button className='date-button' type="submit">Date</button>
                   </form>
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