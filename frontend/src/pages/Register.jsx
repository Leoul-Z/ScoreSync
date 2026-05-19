import '../css/Register.css'

function Register(){
    return (
        <div className="auth-container">
            <div className="auth-card glass-card">
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Get real-time scores from 500+ global leagues</p>
                <form action="onSubmit" className="login-form">
                    <div className="form-item">
                        <label htmlFor="user">User Name</label>
                        <input type="text" id="user" placeholder="Choose a username" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="name@domain.com" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Create a password" required/>
                    </div>
                    <button type='submit' className='login-button'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register