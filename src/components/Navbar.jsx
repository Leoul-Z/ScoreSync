import {Link} from "react-router-dom"
import '../css/Navbar.css'

function Navbar(){
    return <>
        <nav className="navbar">
            <div className="navbar-brand"><Link to= '/' className="navbar-link" >Score<span className="brand-accent">Sync</span></Link></div>
            <div className="navbar-links">
                <Link to= '/' className="navbar-link" >Home</Link>
                
                <Link to= '/fixtures' className="navbar-link" >Fixtures</Link>
                <Link to= '/live' className="navbar-link" >Live Matches</Link>
                <Link to= '/news' className="navbar-link" >News</Link>
            </div>
            <div className="navbar-login">
                <Link to= '/register' className="navbar-link" >Register</Link>
                <Link to= '/login' className="navbar-link" >Login</Link>
            </div>
            

        </nav>
    
    </>
}
export default Navbar