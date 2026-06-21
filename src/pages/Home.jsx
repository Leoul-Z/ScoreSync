import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    const navigate = useNavigate()
    return (
        <div className='home-container'>
            <div className='home-hero-section'>
                {/* Hero Content */}
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

            {/* Featured Match Banner (Frosted Glass Match Card exactly like Reference Image)
            <div className='featured-match-section'>
                <div className='featured-match-card glass-card'>
                    
                    <div className='featured-team home-side'>
                        <span className='featured-team-name'>Manchester U.</span>
                        <div className='featured-team-form'>
                            <span className='form-dot red'></span>
                            <span className='form-dot red'></span>
                            <span className='form-dot red'></span>
                            <span className='form-dot green'></span>
                            <span className='form-dot green'></span>
                        </div>
                    </div>
                    
                    <div className='featured-logo-container'>
                        <img src="https://media.api-sports.io/football/teams/33.png" alt="Manchester United Logo" className='featured-team-logo' />
                    </div>

                    
                    <div className='featured-vs-box'>
                        <span className='featured-vs-text'>VS</span>
                        <div className='featured-vs-details'>
                            <span className='featured-vs-date'>01.07.2026</span>
                            <span className='featured-vs-time'>18:15</span>
                        </div>
                    </div>

                    <div className='featured-logo-container'>
                        <img src="https://media.api-sports.io/football/teams/529.png" alt="Barcelona Logo" className='featured-team-logo' />
                    </div>

                    
                    <div className='featured-team away-side'>
                        <span className='featured-team-name'>FC Barcelona</span>
                        <div className='featured-team-form'>
                            <span className='form-dot green'></span>
                            <span className='form-dot green'></span>
                            <span className='form-dot green'></span>
                            <span className='form-dot green'></span>
                            <span className='form-dot red'></span>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </div>
    )
}

export default Home