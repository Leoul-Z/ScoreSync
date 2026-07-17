import '../css/MatchCard.css'

function MatchCard({ match }) {

    const isLive = match.fixture.status.long === "Second Half" || match.fixture.status.long === "First Half" || match.fixture.status.long === "Extra Time";

    return (
        <div className='matchcard'>

           
            <div className='matchcard-top'>
                <span className='league-info'>
                    {match.league.name}
                </span>

                <span className={isLive ? "status-live" : "status"}>
                    {match.fixture.status.long}
                </span>
            </div>

           
            <div className='teams-info'>

               
                <div className='team1-info'>
                    <img
                        src={match.teams.home.logo}
                        alt={match.teams.home.name}
                        className='team-logo'
                    />

                    <h3 className='team-name'>
                        {match.teams.home.name}
                    </h3>
                </div>

                
                <div className='score-board'>
                    {(match.fixture.status.long === "Not Started" || match.fixture.status.long === "Match Postponed"|| match.fixture.status.long === "Match Cancled") ? 
                    <span>{new Date(match.fixture.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}</span>  : <span>
                        {match.goals.home ?? "-"} - {match.goals.away ?? "-"}
                    </span>
                }
                   
                </div>

               
                <div className='team2-info'>
                    <img
                        src={match.teams.away.logo}
                        alt={match.teams.away.name}
                        className='team-logo'
                    />

                    <h3 className='team-name'>
                        {match.teams.away.name}
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default MatchCard;