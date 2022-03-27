import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Register = () => {
  const navigate = useNavigate();
  const url = "http://localhost:4000/register";
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [inp, setInp] = useState(initialValues);

  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  const register = async () => {
    validate();
    await axios.post(url, inp);
    setInp(initialValues);
  };
  const validate = () => {
    if (inp.name && inp.email && inp.password && inp.confirmPassword) {
      if (inp.password === inp.confirmPassword) {
        toast.success("Successfully Registered", { autoClose: 1200 });
        navigate("/login");
      } else {
        toast.warning("Password don't match", { autoClose: 1200 });
      }
    } else {
      toast.error("Please fill all fields", { autoClose: 1200 });
    }
  };

  return (
    <>
      <div
        className="d-flex w-100 align-items-center justify-content-center p-3"
        style={{ height: "100vh" }}
      >
        <div className="container col-lg-4 col-md-6 bg-dark text-white p-3 rounded-1">
          <div className="text-center">
            <h4>Registration</h4>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control shadow-none"
                name="name"
                value={inp.name}
                onChange={handleChange}
              />
            </div>
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
            <div className="form-group mb-3">
              <label className="form-label">Confirm Password:</label>
              <input
                type="password"
                className="form-control shadow-none"
                name="confirmPassword"
                value={inp.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-outline-light shadow-none"
              onClick={register}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
