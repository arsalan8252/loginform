import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:4000/userlogin';
  const [inp, setInp] = useState({email:'',password:''});
  // const [user, setUser] = useState();

  const handleChange = (e) => {
    setInp({...inp, [e.target.name]:e.target.value});
  }

  // const userLogin = async () => {
  //   const res = await axios.post(url,inp);
  //   const email = res.data.Data.email;
  //   const password = res.data.Data.password;
  //   validate(email, password);
  // }
  // const validate = (email, password) => {
  //   if(inp.email===email && inp.password===password){
  //     toast.success('Login successFull',{autoClose:2500})
  //   }
  //   else if(inp.email === ''){toast.warning('Email required',{autoClose:2500})}
  //   else if(inp.password === ''){toast.warning('Password required',{autoClose:2500})}
  //   else{
  //     toast.warning('Login falied',{autoClose:2500})
  //   }
  // }

  const userLogin = async () => {
    if(inp.email === '' && inp.password === ''){toast.error('All fields are required',{autoClose:2500})}
    else if(inp.email ===''){toast.warning('Email required',{autoClose:2500})}
    else if(inp.password ===''){toast.warning('Password required',{autoClose:2500})}
    else{
      const res = await axios.post(url, inp);
      const Email = res.data.Data.email;
      console.log(Email);
      const Password = res.data.Data.password;
      if(inp.email === Email && inp.password === Password){toast.success('Login successfull',{autoClose:2500}); navigate('/home')}
      else{toast.warn('Login failed',{autoClose:2500})}
    }
  }

  return (
    <>
      <div
        className="d-flex w-100 align-items-center justify-content-center p-3"
        style={{ height: "100vh" }}
      >
           <div className="container col-lg-4 col-md-6 bg-dark text-white p-3 rounded-1">
          <div className="text-center">
            <h4>Login</h4>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control shadow-none"
                name="email"
                value={inp.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control shadow-none"
                name="password"
                value={inp.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-outline-light shadow-none"
              onClick={userLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
