import '../css/MatchCard.css'

function MatchCard({ match }) {

    return (
        <div className='matchcard'>

            {/* TOP INFO */}
            <div className='matchcard-top'>
                <span className='league-info'>
                    {match.league.name}
                </span>

                <span className='status'>
                    {match.fixture.status.long}
                </span>
            </div>

            {/* TEAMS */}
            <div className='teams-info'>

                {/* HOME TEAM */}
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

                {/* SCORE */}
                <div className='score-board'>
                    <span>
                        {match.goals.home ?? "-"} - {match.goals.away ?? "-"}
                    </span>
                </div>

                {/* AWAY TEAM */}
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