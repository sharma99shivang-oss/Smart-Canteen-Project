import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  //(useState->hooks[]) declaration of variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [splitEmail, setSplitEmail] = useState("");
  const navigate = useNavigate();

  const handleFormData = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:5000/api/login';

    const user = { email, password }
    // console.log(user);
    const response = await axios.post(apiUrl, user);

    if (response.data.msg == "success") {
      window.alert("You’re Successfully Logged In!!");
      navigate('/menu')

    }
    else {
      window.alert("Username or password wrong");
    }
  }
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-sm-12 login ">
          <img src="/flower.png" style={{ position: "absolute", zIndex: 1, right: "0", bottom: "0" }} height={"250px"} alt="" />
          <img src="/flower2.png" style={{ position: "absolute", zIndex: 1, left: "0", top: "0" }} height={"250px"} alt="" />

          <form onSubmit={handleFormData} className='p-4 '>
            <h3 className='text-center'>Login </h3>
            <br />

            <input type="email" placeholder="Email" style={{ color: 'white' }} value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control rounded-3 border border-secondary bg-transparent" />
            <br />
            <input type="password" placeholder="Password" style={{ color: 'white' }} value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control rounded-3 border border-secondary bg-transparent " />
            <br />
            <p className='text-danger'>{err}</p>
            <input type="submit" value="Login" className="form-control btn btn-primary" />
            <br /><br />
            <div className="w-100 text-center">
              Need an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Sign Up
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login