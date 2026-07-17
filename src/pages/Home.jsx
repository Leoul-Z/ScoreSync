import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    const navigate = useNavigate()
    return (
        <div className='home-container'>
            <div className='home-hero-section'>
                <div className='hero-content'>
                    <span className='hero-tagline'>LET'S EXPLORE</span>
                    <h1 className='hero-title'>FOOTBALL WORLD</h1>
                    <p className='hero-body'>
                        Experience the beautiful game with real-time analytics, instant notifications, and comprehensive statistics from 500+ leagues worldwide.
                    </p>

                    <div className='hero-buttons'>
                        <button onClick={() => navigate("/live")} className='hero-btn btn-primary'>Watch Live Scores</button>
                        <button onClick={() => navigate("/fixtures")} className='hero-btn btn-secondary'>View Fixtures</button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home