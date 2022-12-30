import { useState } from "react";
import "./Register.css";
import { useSelector } from "react-redux";

function Register() {
  const [user, setUser] = useState({});
  const show= useSelector(arg => arg.show.show)

  function handleSubmit() {
    fetch("http://localhost:4100/api/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
        } else if (res.status === 401) {
        }
      })
      .catch((err) => {
      });
  }



  let reg_content= <div className="container">
  <div className="mb-3">
    
    <label htmlFor="exampleFormControlInput3" className="form-label">
      Email address
    </label>
    <input
      onInput={(e) => {
        user.email = e.target.value;
        setUser(user);
      }}
      value={user.email}
      type="email"
      className="form-control"
      id="exampleFormControlInput3"
      placeholder="name@example.com"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea2" className="form-label">
      Full Name
    </label>
    <input
      onInput={(e) => {
        user.name = e.target.value;
        setUser(user);
      }}
      value={user.name}
      type="text"
      className="form-control"
      id="exampleFormControlTextarea2"
      placeholder="name@example.com"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea2" className="form-label">
      Password
    </label>
    <input
      onInput={(e) => {
        user.password = e.target.value;
        setUser(user);
      }}
      value={user.password}
      type="password"
      className="form-control"
      id="exampleFormControlInput2"
      placeholder="name@example.com"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea3" className="form-label">
      Date of Birth
    </label>
    <input
      onInput={(e) => {
        user.dob = e.target.value;
        setUser(user);
      }}
      value={user.dob}
      type="date"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea3" className="form-label">
      Country
    </label>
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => {
        user.country = e.target.value;
        setUser(user);
      }}>
      <option value="1">India</option>
      <option value="2">USA</option>
      <option value="3">UK</option>
    </select>
  </div>
  <input
    onClick={handleSubmit}
    className="btn btn-primary"
    value="Register"
    type="submit"
  />
</div>

  return (
    reg_content
    
  );
}

export default Register;
