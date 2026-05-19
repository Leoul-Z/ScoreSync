import '../css/Login.css'

function Login(){
    return (
        <div className="auth-container">
            <div className="auth-card glass-card">
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtitle">Login to sync your custom soccer updates</p>
                <form action="onSubmit" className="login-form">
                    <div className="form-item">
                        <label htmlFor="user">User Name</label>
                        <input type="text" id="user" placeholder="Enter your username" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="name@domain.com" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="••••••••" required/>
                    </div>
                    <button type='submit' className='login-button'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login