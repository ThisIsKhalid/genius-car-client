import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";

const SignUp = () => {

    const handleSignup = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,email, password);
    };

    return (
      <div className="hero w-full my-20">
        <div className="hero-content grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="text-center lg:text-left">
            <img className="w-4/5" src={img} alt="" />
          </div>

          <form
            onSubmit={handleSignup}
            className="card w-full max-w-sm shadow-2xl bg-base-100"
          >
            <h1 className="text-5xl text-center font-bold">SignUp</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Signup"
                />
              </div>
              <p className='text-sm text-center'>
                Already have an account? <Link className='underline text-blue-500' to="/signin">SignIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;