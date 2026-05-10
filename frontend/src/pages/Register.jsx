import '../css/Register.css'

function Register(){
    return <>
        <form action="onSubmit" className="login-form">
            <div className="form-item">
                <label htmlFor="user">User Name: </label>
                <input type="text"id="user" required/> <br />
            </div>
            <div className="form-item">
                <label htmlFor="email">Email: </label>
                <input type="Email" id="email" required/> <br />
            </div>
            <div className="form-item">
                <label htmlFor="password">Password: </label>
                <input type="Password" id="password" required/> <br />
            </div>
            <button type='submit' className='login-button'>
                Register
            </button>
        </form>
    </>
}

export default Register