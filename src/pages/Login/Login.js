import "./Login.css";

function Login() {
  return (

    
    <div className="login-container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="name@example.com"></input>
      </div>
      <input className="btn btn-primary" value="Login" type="submit" />
    </div>
  );
}

export default Login;
