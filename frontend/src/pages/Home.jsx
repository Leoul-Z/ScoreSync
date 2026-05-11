import {useNavigate} from 'react-router-dom'
import '../css/Home.css'

function Home(){
    const navigate = useNavigate()
    return  <div className='home'>
                <span className='home-hero'>LIVE SCORES & MATCH UPDATES</span>
                <p className='home-body'>
                    Experience the beautiful game with real-time analytics, instant notifications, and comprehensive statistics from 500+ leagues worldwide.
                </p>

                <div className='home-buttons'>
                    <button onClick={()=> navigate("/live")} className='home-button'>Watch Live Scores</button>
                    <button onClick={()=> navigate("/fixtures")} className='home-button'> View Fixtures</button>
                </div>
            </div>
       

}
export default Home